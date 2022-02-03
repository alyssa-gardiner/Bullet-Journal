import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CalendarDayComponent extends Component {
  @tracked showModalValue = false;

  @action
  showModal() {
    this.showModalValue = true;
  }
}
