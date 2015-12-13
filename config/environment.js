/* jshint node: true */

module.exports = function(environment) {

  var ENV = {

    modulePrefix: 'brenndel',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    podModulePrefix: 'brenndel/pods',

    EmberENV: {
      FEATURES: {

      }
    },

    APP: {}
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.LOG_TRANSITIONS = true;
  }

  if (environment === 'test') {
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;

};