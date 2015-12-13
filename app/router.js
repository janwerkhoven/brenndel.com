import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('quality');
  this.route('tailored');
  this.route('crystal');
  this.route('contact');
  this.route('about');
});

export default Router;
