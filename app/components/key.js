import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default class KeyComponent extends Component {
  @service store;

  @tracked keyItems = this.store.findAll('exercise');
  @tracked showAddModal = false;
  @tracked newName = '';
  @tracked color = null;

  @action
  onColorChange(keyItemName, newColor, keyItemId) {
    this.store.findRecord('exercise', keyItemId).then(function (exercise) {
      exercise.color = newColor;
      exercise.save();
    });
  }

  @action
  handleOnChange(hsva, pickrInstance) {
    if (hsva) {
      this.color = hsva.toHEXA().toString();
    }
    pickrInstance.hide();
  }

  @action
  addExercise() {
    let newExercise = this.store.createRecord('exercise', {
      name: this.newName,
      color: this.color,
    });
    newExercise.save();
    console.log('yes the save button has color', this.color);
    console.log('yes the save button has new name', this.newName);
  }
}
