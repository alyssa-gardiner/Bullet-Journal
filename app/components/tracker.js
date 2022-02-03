import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TrackerComponent extends Component {
  @tracked selectedMonth = this.args.model[0];

  @action
  updateMonth(month) {
    this.selectedMonth = month;
  }
}
