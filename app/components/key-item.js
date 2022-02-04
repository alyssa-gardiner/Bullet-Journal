import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class KeyItemComponent extends Component {
  @tracked showModal = false;

  @action
  handleOnChange(hsva, pickrInstance) {
    if (hsva) {
      this.args.onColorChange(this.args.keyItem.name, hsva.toHEXA().toString(), this.args.keyItem.id);
    }
    pickrInstance.hide();
  }
}
