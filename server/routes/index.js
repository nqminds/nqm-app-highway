module.exports = (function(config) {
  "use strict";

  const log = require("debug")("nqm:route-index");
  const express = require("express");
  const router = express.Router();
  const jwt = require("jsonwebtoken");
  const nqmUtils = require("nqm-core-utils");
  const request = require("request");
  const requestIP = require("request-ip");
  const TDXApi = require("@nqminds/nqm-api-tdx");

  const setUserSession = function(req, res, redirectTo) {
    if (req.query.access_token) {
      // Decode the JWT access token.
      const decoded = jwt.decode(req.query.access_token);
      if (decoded) {
        // n.b. we haven't *verified* the JWT signature, but this is OK if we trust the connection to the auth
        // server (which should be ssl).
        //
        // Save details to session and redirect to client return url.
        req.session.authData = decoded;
        req.session.token = req.query.access_token;
        res.redirect(redirectTo);
      } else {
        log("setUserSession: missing or invalid token received from auth server [%s]", req.query.access_token);
        res.redirect("/");
      }
    }
  };

  router.get("/auth", function(req, res) {
    // Clear any existing session data.
    req.session.destroy(() => {
      // Encode the client return url.
      const rurlClient = encodeURIComponent(req.query.rurl || "/");

      // Encode the auth callback return url (which also includes the client return url!).
      const rurlAuth = encodeURIComponent(
        `${config.appProtocol || "https"}://${req.get("host")}/auth/callback?rurl=${rurlClient}`
      );

      // Redirect to auth server, sending the application token.
      res.redirect(
        `${config.public.tdxConfig.tdxServer}/auth?rurl=${rurlAuth}&a=${config.getToken()}`
      );
    });
  });

  router.get("/auth/callback", function(req, res) {
    setUserSession(req, res, req.query.rurl);
  });

  router.get("/dashboard", function(req, res) {
    // Redirect to the auth server.
    const authServerRedirect = `${config.public.tdxConfig.tdxServer}`;
    res.redirect(authServerRedirect);
  });

  router.get("/sign-out", function(req, res) {
    req.session.destroy(() => {
      // Redirect to the auth server.
      // const authServerRedirect = `https://${config.public.tdxConfig.tdxServer}/sign-out`;
      res.redirect("/");
    });
  });

  router.get("/camera", function(req, res) {
    const headers = {
      Referer: `http://public.highwaystrafficcameras.co.uk/cctvpublicaccess/html/${req.query.id}.html`,
      "Content-Type": "image/jpeg",
    };
    const url = `http://public.highwaystrafficcameras.co.uk/cctvpublicaccess/images/${req.query.id}.jpg?sid=${Math.random()}`;
  
    return fetch(url, {headers})
      .then((response) => {
        console.log(response);
        return response.body;
      })
      .then((blob) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            res.json({image: event.target.result});
          };
          reader.readAsDataURL(blob);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.get("*", function(req, res) {
    // Check for access token on query string.
    if (req.query.access_token) {
      // Set access token in session and remove from URL.
      setUserSession(req, res, req.path);
    } else {
      // Render the client.
      // Pass configuration data to the client app, including the id of the current users' application data folder.
      let userDataFolderId = "";
      if (req.session && req.session.authData) {
        // The user application data folder is a combination of the application id and the user TDX id.
        userDataFolderId = nqmUtils.shortHash(`${config.applicationId}-${req.session.authData.sub}`);
      }

      const doRender = (token) => {
        // Now render the client app.
        res.render("index", {
          accessToken: token || "",
          config,
          settings: {public: config.public},
          title: config.public.applicationTitle,
          userDataFolderId,
        });
      };

      if ((!req.session || !req.session.token) && config.publicShareKeyId && config.publicShareKeySecret) {
        //
        // There is no session, which implies a user has not logged in yet. If your app supports a 'public' mode,
        // in which you'd like to be able to provide the browser client with data from resources that are not in
        // public share mode the recommended approach is to create a share key and share the resources with it.
        // You can then ask the auth server for a token binding the share key to the clients IP address. This
        // enables the client code to make TDX requests using the share key identity, i.e. it will have access
        // to any resources shared with that key.
        //
        const tdxApi = new TDXApi(config.public.tdxConfig);
        let publicToken;
        tdxApi.authenticate(config.publicShareKeyId, config.publicShareKeySecret, null, requestIP.getClientIp(req))
          .then((token) => {
            publicToken = token;
          })
          .catch((err) => {
            log("failed to get public share key token [%s]", err.message);
          })
          .finally(() => {
            doRender(publicToken || "");
          });
      } else {
        doRender((req.session && req.session.token) || "");
      }
    }
  });

  return router;
});
