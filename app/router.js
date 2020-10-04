import EmberRouter from '@ember/routing/router';
import config from 'full-challenge-ysi-front-end/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('companies')
});
