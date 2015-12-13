import Ember from 'ember';
export default {

  // add the current route as class to <body>, needed for CSS

  name: 'route-classes',

  initialize: function() {

    Ember.Route.reopen({

      activate: function() {
        var route = this.dasherizedRoute();
        if (route !== 'application') {
          Ember.$('body').addClass(route);
        }
      },

      deactivate: function() {
        Ember.$('body').removeClass(this.dasherizedRoute());
      },

      dasherizedRoute: function() {
        return this.routeName.replace(/\./g, '-').dasherize();
      }

    });
  }

};