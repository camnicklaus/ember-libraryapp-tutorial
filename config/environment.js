/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'library-app',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    firebase: {
      apiKey: "AIzaSyC8zg8Txmel3EOG6oGNKvdD34ld2qKZFK8",
      authDomain: "ember-library-tutorial-bef92.firebaseapp.com",
      databaseURL: "https://ember-library-tutorial-bef92.firebaseio.com",
      projectId: "ember-library-tutorial-bef92",
      storageBucket: "",
      messagingSenderId: "233429834290"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['ember-faker'] = {
      enabled: true
    };
  }

  return ENV;
};
