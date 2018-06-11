module.exports = (function(appConfig) {
  "use strict";

  const log = require("debug")("nqm-app:boot");
  const TDXApi = require("@nqminds/nqm-api-tdx");
  const nqmUtils = require("nqm-core-utils");
  const constants = nqmUtils.constants;

  const addServerResource = function(api, id, name, schema) {
    log("creating %s dataset", name);
    return api.addResource(
      {
        id: `${appConfig.getServerDataFolderId()}-${id}`,
        name: name,
        schema: schema,
        parentId: appConfig.getServerDataFolderId(),
      },
      true
    ).then((result) => {
      return result.response;
    });
  };

  const addServerFilter = function(api, id, name, derived, shareMode) {
    log("creating %s dataset", name);
    const resourceId = `${appConfig.getServerDataFolderId()}-${id}`;
    const filterId = `${appConfig.getServerDataFolderId()}-${id}Filter`;

    return api.addResource(
      {
        id: filterId,
        name: `${name} filter`,
        derived: {
          source: resourceId,
          filter: JSON.stringify(derived.filter),
          projection: JSON.stringify(derived.projection),
          writeFilter: JSON.stringify(derived.writeFilter),
          writeProjection: JSON.stringify(derived.writeProjection),
        },
        parentId: appConfig.getServerDataFolderId(),
        shareMode: shareMode,
      },
      true
    ).then((result) => {
      return result.response;
    });
  };

  const checkServerResourceExists = function(api, resourceId) {
    return api.getResource(resourceId)
      .catch((err) => {
        if (err.name === "TDXApiError") {
          const errInfo = JSON.parse(err.message);
          if (errInfo.code === 404) {
            return null;
          } else {
            return Promise.reject(err);
          }
        } else {
          return Promise.reject(err);
        }
      });
  };

  const bootServerResource = function(api, id, name) {
    const resourceId = `${appConfig.getServerDataFolderId()}-${id}`;
    const filterId = `${appConfig.getServerDataFolderId()}-${id}Filter`;

    // Check the resource exists.
    return checkServerResourceExists(api, resourceId)
      .then((resource) => {
        // Find the resource.
        if (!resource) {
          // Create the resource.
          return addServerResource(api, id, name, appConfig.schemas[id]);
        } else {
          log("got resource %s", resource.id);
          return resource;
        }
      })
      .then((resource) => {
        if (!resource) {
          return Promise.reject(`resource ${id} not found"`);
        }
        appConfig.setResourceId(id, resource.id);
        return checkServerResourceExists(api, filterId);
      })
      .then((filterResource) => {
        if (!filterResource) {
          // Create the filter resource.
          return addServerFilter(api, id, name, appConfig.derived[id], nqmUtils.constants.publicRWShareMode);
        } else {
          log("got filter resource %s", filterResource.id);
          return filterResource;
        }
      })
      .then((filterResource) => {
        if (!filterResource) {
          return Promise.reject(`${id} filter resource not found`);
        }
        appConfig.setResourceId(`${id}Filter`, filterResource.id);
      });
  };

  const bootstrap = function() {
    // Configure TDX comms.
    const api = new TDXApi(appConfig.public.tdxConfig);

    return api.authenticate(appConfig.applicationId, appConfig.applicationSecret)
      .then((token) => {
        log("TDX authenticated OK");
        appConfig.setToken(token);

        // Determine the id of the application server data folder.
        const dataFolderId = nqmUtils.shortHash(constants.applicationServerDataFolderPrefix + appConfig.applicationId);
        return checkServerResourceExists(api, dataFolderId);
      })
      .then((resource) => {
        if (!resource) {
          // TODO - review - Should be created by account-saga, but could attempt to re-create it here?
          return Promise.reject(new Error("server data folder not found"));
        }

        log("got server data folder [%s]", resource.id);

        // Cache the folder id.
        appConfig.setServerDataFolderId(resource.id);

        // Create any resources needed here e.g.
        // return bootServerResource(api, "owner", "owners");
      })
      .catch((err) => {
        log("server boot failed [%s]", err.message);
        return Promise.reject(err);
      });
  };

  return bootstrap;
});
