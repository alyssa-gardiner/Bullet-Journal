import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default class KeyComponent extends Component {
  @service store;

  @tracked keyItems = this.store.findAll('exercise');

  @action
  onColorChange(keyItemName, newColor, keyItemId) {

  this.store.findRecord('exercise', keyItemId).then(function(exercise) {
    exercise.color = newColor;
    exercise.save();
  });
  }
}
