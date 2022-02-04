import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class UpdateComponent extends Component {
  @service store;

  @tracked keyItems = this.store.findAll('exercise');

  @action
  updateDay(keyItem) {
    set(this.args.day, 'exercise', keyItem);
  }

  @action
  updateDescription(value) {
    set(this.args.day, 'description', value);
  }

  isSelectedExercise(keyItem) {
    return (
      this.args.day.exercise !== null && this.args.day.exercise === keyItem
    );
  }
}
