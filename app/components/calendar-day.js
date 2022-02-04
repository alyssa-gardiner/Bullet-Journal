import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CalendarDayComponent extends Component {
  @tracked showModalValue = false;
  @tracked sticker = [];

  @action
  showModal() {
    this.showModalValue = true;
  }

  @action
  setSticker(sticker) {
    this.sticker.pushObject(sticker);
  }
}
