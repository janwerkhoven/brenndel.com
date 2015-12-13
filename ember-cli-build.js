/*jshint node:true*/
/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var isProductionBuild = ['production', 'staging'].indexOf(EmberApp.env()) > -1;

module.exports = function(defaults) {

  var app = new EmberApp(defaults, {
    sourcemaps: {
      enabled: !isProductionBuild,
    },
    minifyCSS: {
      enabled: isProductionBuild
    },
    minifyJS: {
      enabled: isProductionBuild
    },
    autoprefixer: {
      browsers: ['> 1%'],
      cascade: false
    }
  });

  // app.import('bower_components/velocity/velocity.js'); // Velocity - needed for CSS3 animations (JW)
  // app.import('vendor/modernizr.min.js'); // Modernizr - needed for HTML and CSS fallback tags (JW)
  // app.import('vendor/google-analytics.js'); // For testing we include GA also on non-production environments, but send that data to the test data repo instead (JW)
  //
  // if (isProductionBuild) {
  //   // app.import('vendor/zendesk.js'); // Zendesk - adds button to right corner that links to FAQs and adds feedback form (JW)
  // }

  return app.toTree();

};