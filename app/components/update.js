import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { Promise as EmberPromise } from 'rsvp';

export default class UpdateComponent extends Component {
  @service store;

  @tracked keyItems = this.store.findAll('exercise');

  @action
  async updateDay(keyItem) {
    let matchingDay = await this.store.queryRecord('day', {dayOfMonth: this.args.day.number,monthNumber: this.args.day.monthNumber})
    .catch(err => {
        if(err.errors.length < 2 && err.errors[0].status == 404) {
          let newDay = this.store.createRecord('day', {
          monthNumber: this.args.day.monthNumber,
          dayOfMonth: this.args.day.number,
          exerciseId: keyItem.id
          });
          debugger;
          newDay.save();
        }});
    if(matchingDay) {
    debugger;
    this.store.findRecord('day', matchingDay.id).then(function(day) {
      day.exerciseId = keyItem.id;
    });
    }
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
