SystemJS.config({
  production: false,
  paths: {
    "npm:": "jspm_packages/npm/",
    "nqm-app/": "src/",
    "github:": "jspm_packages/github/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25",
      "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.24.1",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.24.1",
      "systemjs-hot-reloader": "npm:systemjs-hot-reloader@1.1.0"
    },
    "packages": {
      "npm:systemjs-hot-reloader@1.1.0": {
        "map": {
          "systemjs-hmr": "npm:systemjs-hmr@2.0.9"
        }
      },
      "npm:babel-plugin-transform-class-properties@6.24.1": {
        "map": {
          "babel-template": "npm:babel-template@6.24.1",
          "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.13.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:babel-template@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "lodash": "npm:lodash@4.17.10",
          "babel-traverse": "npm:babel-traverse@6.24.1",
          "babel-types": "npm:babel-types@6.24.1",
          "babylon": "npm:babylon@6.17.1"
        }
      },
      "npm:babel-helper-function-name@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-template": "npm:babel-template@6.24.1",
          "babel-traverse": "npm:babel-traverse@6.24.1",
          "babel-types": "npm:babel-types@6.24.1",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1"
        }
      },
      "npm:babel-traverse@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "lodash": "npm:lodash@4.17.10",
          "babel-types": "npm:babel-types@6.24.1",
          "babylon": "npm:babylon@6.17.1",
          "globals": "npm:globals@9.17.0",
          "invariant": "npm:invariant@2.2.2",
          "debug": "npm:debug@2.6.9",
          "babel-messages": "npm:babel-messages@6.23.0",
          "babel-code-frame": "npm:babel-code-frame@6.22.0"
        }
      },
      "npm:babel-types@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "lodash": "npm:lodash@4.17.10",
          "to-fast-properties": "npm:to-fast-properties@1.0.3",
          "esutils": "npm:esutils@2.0.2"
        }
      },
      "npm:babel-helper-get-function-arity@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-types": "npm:babel-types@6.24.1"
        }
      },
      "npm:babel-messages@6.23.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:babel-code-frame@6.22.0": {
        "map": {
          "esutils": "npm:esutils@2.0.2",
          "js-tokens": "npm:js-tokens@3.0.2",
          "chalk": "npm:chalk@1.1.3"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "supports-color": "npm:supports-color@2.0.0",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "has-ansi": "npm:has-ansi@2.0.0",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.1.1"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.1.1"
        }
      },
      "npm:babel-plugin-transform-react-jsx@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
          "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.24.1"
        }
      },
      "npm:babel-helper-builder-react-jsx@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "babel-types": "npm:babel-types@6.24.1",
          "esutils": "npm:esutils@2.0.2"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "nqm-app": {
      "main": "main.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel",
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-react-jsx",
              "babel-plugin-transform-class-properties"
            ]
          }
        }
      }
    },
    "npm:react-datepicker@0.52.0": {
      "map": {
        "classnames": "npm:classnames@2.2.5",
        "prop-types": "npm:prop-types@15.6.1",
        "react-onclickoutside": "npm:react-onclickoutside@6.4.0",
        "moment": "npm:moment@2.18.1",
        "react-popper": "npm:react-popper@0.7.2"
      }
    },
    "npm:react-popper@0.7.2": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
        "popper.js": "npm:popper.js@1.14.3"
      }
    },
    "npm:is-equal-shallow@0.1.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:react-select@1.0.0-rc.5": {
      "map": {
        "create-react-class": "npm:create-react-class@15.6.3",
        "classnames": "npm:classnames@2.2.5",
        "prop-types": "npm:prop-types@15.6.1",
        "react-input-autosize": "npm:react-input-autosize@1.1.4"
      }
    },
    "npm:react-input-autosize@1.1.4": {
      "map": {
        "create-react-class": "npm:create-react-class@15.6.3",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:material-ui-icons@1.0.0-alpha.19": {
      "map": {
        "recompose": "npm:recompose@0.23.5"
      }
    },
    "npm:recompose@0.23.5": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.4",
        "fbjs": "npm:fbjs@0.8.16",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "change-emitter": "npm:change-emitter@0.1.6"
      }
    },
    "npm:chrono-node@1.3.5": {
      "map": {
        "moment": "npm:moment@2.18.1"
      }
    },
    "npm:scroll@2.0.1": {
      "map": {
        "rafl": "npm:rafl@1.2.2"
      }
    },
    "npm:recompose@0.26.0": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
        "fbjs": "npm:fbjs@0.8.16",
        "symbol-observable": "npm:symbol-observable@1.0.4",
        "change-emitter": "npm:change-emitter@0.1.6"
      }
    },
    "npm:material-ui@next": {
      "map": {
        "react-jss": "npm:react-jss@8.4.0",
        "deepmerge": "npm:deepmerge@2.1.0",
        "react-flow-types": "npm:react-flow-types@0.2.0-beta.3",
        "normalize-scroll-left": "npm:normalize-scroll-left@0.1.2",
        "jss-preset-default": "npm:jss-preset-default@4.5.0",
        "react-popper": "npm:react-popper@0.7.4",
        "dom-helpers": "npm:dom-helpers@3.3.1",
        "jss": "npm:jss@9.8.1",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
        "brcast": "npm:brcast@3.0.1",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "react-scrollbar-size": "npm:react-scrollbar-size@2.1.0",
        "react-event-listener": "npm:react-event-listener@0.5.8",
        "keycode": "npm:keycode@2.2.0",
        "warning": "npm:warning@3.0.0",
        "scroll": "npm:scroll@2.0.1",
        "react-transition-group": "npm:react-transition-group@2.3.1",
        "classnames": "npm:classnames@2.2.5",
        "prop-types": "npm:prop-types@15.6.1",
        "lodash": "npm:lodash@4.17.10",
        "recompose": "npm:recompose@0.26.0",
        "jss-camel-case": "npm:jss-camel-case@6.1.0",
        "jss-props-sort": "npm:jss-props-sort@6.0.0",
        "jss-vendor-prefixer": "npm:jss-vendor-prefixer@7.0.0",
        "jss-global": "npm:jss-global@3.0.0",
        "jss-nested": "npm:jss-nested@6.0.1",
        "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
        "@types/jss": "npm:@types/jss@9.5.3",
        "jss-default-unit": "npm:jss-default-unit@8.0.2",
        "@babel/runtime": "npm:@babel/runtime@7.0.0-beta.47",
        "@types/react-transition-group": "npm:@types/react-transition-group@2.0.9"
      }
    },
    "npm:react-popper@0.7.4": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "popper.js": "npm:popper.js@1.14.3"
      }
    },
    "npm:create-react-class@15.6.3": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    }
  },
  map: {
    "chrono-node": "npm:chrono-node@1.3.5",
    "material-ui": "npm:material-ui@next",
    "material-ui-icons": "npm:material-ui-icons@1.0.0-alpha.19",
    "react-datepicker": "npm:react-datepicker@0.52.0",
    "react-select": "npm:react-select@1.0.0-rc.5"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "leaflet": "npm:leaflet@1.3.1",
    "react-leaflet": "npm:react-leaflet@1.9.1",
    "@babel/runtime": "npm:@babel/runtime@7.0.0-beta.47",
    "@material-ui/core": "npm:@material-ui/core@1.0.0",
    "@material-ui/icons": "npm:@material-ui/icons@1.0.0",
    "@nqminds/nqm-tdx-client": "npm:@nqminds/nqm-tdx-client@0.5.0",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "classnames": "npm:classnames@2.2.5",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "css": "github:systemjs/plugin-css@0.1.35",
    "debug": "npm:debug@2.6.9",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "jss": "npm:jss@9.8.1",
    "jss-camel-case": "npm:jss-camel-case@6.1.0",
    "jss-default-unit": "npm:jss-default-unit@8.0.2",
    "jss-global": "npm:jss-global@3.0.0",
    "jss-nested": "npm:jss-nested@6.0.1",
    "jss-props-sort": "npm:jss-props-sort@6.0.0",
    "jss-theme-reactor": "npm:jss-theme-reactor@0.11.1",
    "jss-vendor-prefixer": "npm:jss-vendor-prefixer@7.0.0",
    "lodash": "npm:lodash@4.17.10",
    "moment": "npm:moment@2.18.1",
    "nqm-mantra-core": "npm:nqm-mantra-core@1.8.1",
    "os": "npm:jspm-nodelibs-os@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "prop-types": "npm:prop-types@15.6.1",
    "react": "npm:react@16.4.0",
    "react-dom": "npm:react-dom@16.3.2",
    "react-router": "npm:react-router@4.1.1",
    "react-router-dom": "npm:react-router-dom@4.1.1",
    "readable-stream": "npm:readable-stream@2.3.6",
    "redbox-react": "npm:redbox-react@1.3.6",
    "redux": "npm:redux@3.6.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "tty": "npm:jspm-nodelibs-tty@0.2.1",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:nqm-mantra-core@1.8.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "nqm-react-simple-di": "npm:nqm-react-simple-di@1.3.3",
        "nqm-react-komposer": "npm:nqm-react-komposer@2.0.5"
      }
    },
    "npm:react-stubber@1.0.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:shallowequal@0.2.2": {
      "map": {
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.2"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
        "lodash.isarray": "npm:lodash.isarray@3.0.4",
        "lodash._getnative": "npm:lodash._getnative@3.9.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@2.0.4",
        "node-fetch": "npm:node-fetch@1.7.3"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.6"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.1.0"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.2.0"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.23"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.12.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.1": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.1": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7",
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.1"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.8",
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "brorand": "npm:brorand@1.1.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hmac-drbg": "npm:hmac-drbg@1.0.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.6",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.8.3"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.6",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:redux@3.6.0": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.4",
        "lodash-es": "npm:lodash-es@4.17.10",
        "loose-envify": "npm:loose-envify@1.3.1",
        "lodash": "npm:lodash@4.17.10"
      }
    },
    "npm:react-router-dom@4.1.1": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "loose-envify": "npm:loose-envify@1.3.1",
        "history": "npm:history@4.6.1",
        "react-router": "npm:react-router@4.1.1"
      }
    },
    "npm:history@4.6.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "invariant": "npm:invariant@2.2.2",
        "warning": "npm:warning@3.0.0",
        "value-equal": "npm:value-equal@0.2.1",
        "resolve-pathname": "npm:resolve-pathname@2.1.0"
      }
    },
    "npm:react-router@4.1.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "history": "npm:history@4.6.1",
        "invariant": "npm:invariant@2.2.2",
        "prop-types": "npm:prop-types@15.6.1",
        "warning": "npm:warning@3.0.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "path-to-regexp": "npm:path-to-regexp@1.7.0"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:path-to-regexp@1.7.0": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:redbox-react@1.3.6": {
      "map": {
        "error-stack-parser": "npm:error-stack-parser@1.3.6",
        "object-assign": "npm:object-assign@4.1.1",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:error-stack-parser@1.3.6": {
      "map": {
        "stackframe": "npm:stackframe@0.3.1"
      }
    },
    "npm:css-vendor@0.3.8": {
      "map": {
        "is-in-browser": "npm:is-in-browser@1.1.3"
      }
    },
    "npm:rafl@1.2.2": {
      "map": {
        "global": "npm:global@4.3.2"
      }
    },
    "npm:global@4.3.2": {
      "map": {
        "process": "npm:process@0.5.2",
        "min-document": "npm:min-document@2.19.0",
        "node-min-document": "npm:min-document@2.19.0"
      }
    },
    "npm:min-document@2.19.0": {
      "map": {
        "dom-walk": "npm:dom-walk@0.1.1"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:is-plain-object@2.0.4": {
      "map": {
        "isobject": "npm:isobject@3.0.1"
      }
    },
    "npm:promise@7.3.1": {
      "map": {
        "asap": "npm:asap@2.0.6"
      }
    },
    "npm:md5.js@1.3.4": {
      "map": {
        "hash-base": "npm:hash-base@3.0.4",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:babel-runtime@6.26.0": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.11.1",
        "core-js": "npm:core-js@2.5.7"
      }
    },
    "npm:node-fetch@1.7.3": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "md5.js": "npm:md5.js@1.3.4"
      }
    },
    "npm:jss-theme-reactor@0.11.1": {
      "map": {
        "murmurhash-js": "npm:murmurhash-js@1.0.0",
        "jss-vendor-prefixer": "npm:jss-vendor-prefixer@5.1.0",
        "jss": "npm:jss@7.1.7",
        "jss-preset-default": "npm:jss-preset-default@2.0.0"
      }
    },
    "npm:jss-vendor-prefixer@5.1.0": {
      "map": {
        "css-vendor": "npm:css-vendor@0.3.8"
      }
    },
    "npm:jss-preset-default@2.0.0": {
      "map": {
        "jss-camel-case": "npm:jss-camel-case@4.0.0",
        "jss-compose": "npm:jss-compose@3.0.1",
        "jss-default-unit": "npm:jss-default-unit@6.1.2",
        "jss-expand": "npm:jss-expand@3.0.1",
        "jss-extend": "npm:jss-extend@4.0.1",
        "jss-global": "npm:jss-global@1.0.1",
        "jss-nested": "npm:jss-nested@4.0.1",
        "jss-props-sort": "npm:jss-props-sort@4.0.0",
        "jss-vendor-prefixer": "npm:jss-vendor-prefixer@5.1.0"
      }
    },
    "npm:jss@7.1.7": {
      "map": {
        "is-in-browser": "npm:is-in-browser@1.0.2",
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:jss-compose@3.0.1": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:jss-extend@4.0.1": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:jss-nested@4.0.1": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:fbjs@0.8.16": {
      "map": {
        "core-js": "npm:core-js@1.2.7",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "promise": "npm:promise@7.3.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "ua-parser-js": "npm:ua-parser-js@0.7.18"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:jss-compose@5.0.0": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:jss-nested@6.0.1": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:jss-vendor-prefixer@7.0.0": {
      "map": {
        "css-vendor": "npm:css-vendor@0.3.8"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.1",
        "randomfill": "npm:randomfill@1.0.4",
        "create-ecdh": "npm:create-ecdh@4.0.3",
        "create-hash": "npm:create-hash@1.2.0",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "randombytes": "npm:randombytes@2.0.6",
        "pbkdf2": "npm:pbkdf2@3.0.16",
        "create-hmac": "npm:create-hmac@1.1.7",
        "public-encrypt": "npm:public-encrypt@4.0.2",
        "diffie-hellman": "npm:diffie-hellman@5.0.3"
      }
    },
    "npm:debug@2.6.9": {
      "map": {
        "ms": "npm:ms@2.0.0"
      }
    },
    "npm:nqm-minimongo@0.1.5": {
      "map": {
        "lodash": "npm:lodash@3.10.1",
        "async": "npm:async@1.5.2"
      }
    },
    "npm:ejson@2.1.2": {
      "map": {
        "underscore": "npm:underscore@1.8.3"
      }
    },
    "npm:debug@3.1.0": {
      "map": {
        "ms": "npm:ms@2.0.0"
      }
    },
    "npm:@types/jss@9.5.3": {
      "map": {
        "indefinite-observable": "npm:indefinite-observable@1.0.1",
        "csstype": "npm:csstype@2.5.2"
      }
    },
    "npm:jss@9.8.1": {
      "map": {
        "is-in-browser": "npm:is-in-browser@1.1.3",
        "symbol-observable": "npm:symbol-observable@1.2.0",
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:indefinite-observable@1.0.1": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.4"
      }
    },
    "npm:@babel/runtime@7.0.0-beta.47": {
      "map": {
        "core-js": "npm:core-js@2.5.7",
        "regenerator-runtime": "npm:regenerator-runtime@0.11.1"
      }
    },
    "npm:@types/react-transition-group@2.0.9": {
      "map": {
        "@types/react": "npm:@types/react@16.3.14"
      }
    },
    "npm:@types/react@16.3.14": {
      "map": {
        "csstype": "npm:csstype@2.5.2"
      }
    },
    "npm:@material-ui/core@1.0.0": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
        "react-popper": "npm:react-popper@0.10.4",
        "normalize-scroll-left": "npm:normalize-scroll-left@0.1.2",
        "scroll": "npm:scroll@2.0.3",
        "brcast": "npm:brcast@3.0.1",
        "recompose": "npm:recompose@0.27.1",
        "deepmerge": "npm:deepmerge@2.1.0",
        "dom-helpers": "npm:dom-helpers@3.3.1",
        "jss-props-sort": "npm:jss-props-sort@6.0.0",
        "classnames": "npm:classnames@2.2.5",
        "jss-camel-case": "npm:jss-camel-case@6.1.0",
        "jss": "npm:jss@9.8.1",
        "jss-default-unit": "npm:jss-default-unit@8.0.2",
        "react-jss": "npm:react-jss@8.4.0",
        "react-transition-group": "npm:react-transition-group@2.3.1",
        "react-scrollbar-size": "npm:react-scrollbar-size@2.1.0",
        "warning": "npm:warning@3.0.0",
        "keycode": "npm:keycode@2.2.0",
        "react-event-listener": "npm:react-event-listener@0.5.8",
        "lodash": "npm:lodash@4.17.10",
        "prop-types": "npm:prop-types@15.6.1",
        "jss-vendor-prefixer": "npm:jss-vendor-prefixer@7.0.0",
        "jss-global": "npm:jss-global@3.0.0",
        "jss-nested": "npm:jss-nested@6.0.1",
        "@types/react-transition-group": "npm:@types/react-transition-group@2.0.9",
        "@types/jss": "npm:@types/jss@9.5.3",
        "@babel/runtime": "npm:@babel/runtime@7.0.0-beta.47"
      }
    },
    "npm:react-event-listener@0.5.8": {
      "map": {
        "warning": "npm:warning@3.0.0",
        "prop-types": "npm:prop-types@15.6.1",
        "fbjs": "npm:fbjs@0.8.16",
        "@babel/runtime": "npm:@babel/runtime@7.0.0-beta.47"
      }
    },
    "npm:recompose@0.27.1": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
        "fbjs": "npm:fbjs@0.8.16",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "change-emitter": "npm:change-emitter@0.1.6",
        "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
        "symbol-observable": "npm:symbol-observable@1.2.0"
      }
    },
    "npm:react-popper@0.10.4": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "popper.js": "npm:popper.js@1.14.3"
      }
    },
    "npm:react-jss@8.4.0": {
      "map": {
        "jss": "npm:jss@9.8.1",
        "prop-types": "npm:prop-types@15.6.1",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
        "jss-preset-default": "npm:jss-preset-default@4.5.0",
        "theming": "npm:theming@1.3.0"
      }
    },
    "npm:react-transition-group@2.3.1": {
      "map": {
        "dom-helpers": "npm:dom-helpers@3.3.1",
        "prop-types": "npm:prop-types@15.6.1",
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:react-scrollbar-size@2.1.0": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "react-event-listener": "npm:react-event-listener@0.5.8",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "stifle": "npm:stifle@1.0.4"
      }
    },
    "npm:prop-types@15.6.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:scroll@2.0.3": {
      "map": {
        "rafl": "npm:rafl@1.2.2"
      }
    },
    "npm:jss-camel-case@6.1.0": {
      "map": {
        "hyphenate-style-name": "npm:hyphenate-style-name@1.0.2"
      }
    },
    "npm:jss-preset-default@4.5.0": {
      "map": {
        "jss-camel-case": "npm:jss-camel-case@6.1.0",
        "jss-default-unit": "npm:jss-default-unit@8.0.2",
        "jss-global": "npm:jss-global@3.0.0",
        "jss-nested": "npm:jss-nested@6.0.1",
        "jss-props-sort": "npm:jss-props-sort@6.0.0",
        "jss-vendor-prefixer": "npm:jss-vendor-prefixer@7.0.0",
        "jss-template": "npm:jss-template@1.0.1",
        "jss-extend": "npm:jss-extend@6.2.0",
        "jss-compose": "npm:jss-compose@5.0.0",
        "jss-expand": "npm:jss-expand@5.3.0"
      }
    },
    "npm:theming@1.3.0": {
      "map": {
        "brcast": "npm:brcast@3.0.1",
        "prop-types": "npm:prop-types@15.6.1",
        "is-plain-object": "npm:is-plain-object@2.0.4",
        "is-function": "npm:is-function@1.0.1"
      }
    },
    "npm:react-dom@16.3.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:jss-template@1.0.1": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:jss-extend@6.2.0": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:readable-stream@2.3.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "process-nextick-args": "npm:process-nextick-args@2.0.0",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "isarray": "npm:isarray@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@1.1.1"
      }
    },
    "npm:buffer@5.1.0": {
      "map": {
        "ieee754": "npm:ieee754@1.1.12",
        "base64-js": "npm:base64-js@1.3.0"
      }
    },
    "npm:iconv-lite@0.4.23": {
      "map": {
        "safer-buffer": "npm:safer-buffer@2.1.2"
      }
    },
    "npm:string_decoder@1.1.1": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:pbkdf2@3.0.16": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:randomfill@1.0.4": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:create-hash@1.2.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11",
        "md5.js": "npm:md5.js@1.3.4",
        "cipher-base": "npm:cipher-base@1.0.4"
      }
    },
    "npm:randombytes@2.0.6": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:create-hmac@1.1.7": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11",
        "cipher-base": "npm:cipher-base@1.0.4"
      }
    },
    "npm:diffie-hellman@5.0.3": {
      "map": {
        "randombytes": "npm:randombytes@2.0.6",
        "miller-rabin": "npm:miller-rabin@4.0.1",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:public-encrypt@4.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.6",
        "create-hash": "npm:create-hash@1.2.0",
        "parse-asn1": "npm:parse-asn1@5.1.1",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:browserify-cipher@1.0.1": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.2.0",
        "browserify-des": "npm:browserify-des@1.0.1",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
      }
    },
    "npm:create-ecdh@4.0.3": {
      "map": {
        "elliptic": "npm:elliptic@6.4.0",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:browserify-aes@1.2.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-des@1.0.1": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:parse-asn1@5.1.1": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.16",
        "browserify-aes": "npm:browserify-aes@1.2.0",
        "asn1.js": "npm:asn1.js@4.10.1"
      }
    },
    "npm:ripemd160@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@3.0.4"
      }
    },
    "npm:sha.js@2.4.11": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:asn1.js@4.10.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:@material-ui/icons@1.0.0": {
      "map": {
        "recompose": "npm:recompose@0.27.1"
      }
    },
    "npm:@nqminds/nqm-tdx-client@0.5.0": {
      "map": {
        "nqm-react-komposer": "npm:nqm-react-komposer@2.0.5",
        "nqm-minimongo": "npm:nqm-minimongo@0.1.5",
        "nqm-react-simple-di": "npm:nqm-react-simple-di@1.3.3",
        "debug": "npm:debug@2.6.9",
        "@nqminds/ddp.js": "npm:@nqminds/ddp.js@2.2.4",
        "event-emitter-es6": "npm:event-emitter-es6@1.1.5",
        "lodash": "npm:lodash@4.17.10",
        "@nqminds/nqm-api-tdx": "npm:@nqminds/nqm-api-tdx@0.3.2",
        "@nqminds/nqm-core-utils": "npm:@nqminds/nqm-core-utils@0.4.31"
      }
    },
    "npm:nqm-react-komposer@2.0.5": {
      "map": {
        "shallowequal": "npm:shallowequal@0.2.2",
        "react-stubber": "npm:react-stubber@1.0.0",
        "lodash.pick": "npm:lodash.pick@4.4.0",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0"
      }
    },
    "npm:nqm-react-simple-di@1.3.3": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "prop-types": "npm:prop-types@15.6.1",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0"
      }
    },
    "npm:@nqminds/ddp.js@2.2.4": {
      "map": {
        "wolfy87-eventemitter": "npm:wolfy87-eventemitter@4.3.0",
        "ejson": "npm:ejson@2.1.2"
      }
    },
    "npm:@nqminds/nqm-api-tdx@0.3.2": {
      "map": {
        "debug": "npm:debug@3.1.0",
        "lodash": "npm:lodash@4.17.10",
        "bluebird": "npm:bluebird@3.5.1",
        "base-64": "npm:base-64@0.1.0",
        "cross-fetch": "npm:cross-fetch@2.2.1",
        "@nqminds/nqm-core-utils": "npm:@nqminds/nqm-core-utils@0.4.31"
      }
    },
    "npm:cross-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@2.1.2",
        "whatwg-fetch": "npm:whatwg-fetch@2.0.4"
      }
    },
    "npm:stream-http@2.8.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.6",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0"
      }
    },
    "npm:@nqminds/nqm-core-utils@0.4.31": {
      "map": {
        "debug": "npm:debug@3.1.0",
        "lodash": "npm:lodash@4.17.10",
        "shortid": "npm:shortid@2.2.8",
        "ajv": "npm:ajv@5.5.2"
      }
    },
    "npm:ajv@5.5.2": {
      "map": {
        "fast-json-stable-stringify": "npm:fast-json-stable-stringify@2.0.0",
        "json-schema-traverse": "npm:json-schema-traverse@0.3.1",
        "co": "npm:co@4.6.0",
        "fast-deep-equal": "npm:fast-deep-equal@1.1.0"
      }
    },
    "npm:react@16.4.0": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:react-leaflet@1.9.1": {
      "map": {
        "lodash-es": "npm:lodash-es@4.17.10",
        "lodash": "npm:lodash@4.17.10",
        "warning": "npm:warning@3.0.0"
      }
    }
  }
});
