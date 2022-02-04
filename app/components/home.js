import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HomeComponent extends Component {
  @service router;

  @action
  routeToTracker(url) {
    this.router.transitionTo(url);
  }

}
