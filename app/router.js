import EmberRouter from '@ember/routing/router';
import config from 'exercise-tracker/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('tracker');
  this.route('gratitude');
  this.route('home');
});
