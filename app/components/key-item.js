import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class KeyItemComponent extends Component {
  @tracked showModal = false;

  @action
  onInit(pickrInstance) {
      pickrInstance.setColor(this.args.keyItem.color);
    }

  @action
  handleOnChange(hsva, pickrInstance) {
      if(hsva) {
//        TODO: pass in the method so the updated color is higher up
        set(this.args.keyItem, 'color', hsva.toHEXA().toString());
      }
      pickrInstance.hide()
    }


}
