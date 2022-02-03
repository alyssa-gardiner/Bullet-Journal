import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UpdateComponent extends Component {
  keyItems = [
   { id: 1, name: 'Run', color: '#ff3399' },
   { id: 2, name: 'Walk', color: '#ffff00' },
   { id: 3, name: 'Bike', color: '#66ff33' },
   { id: 4, name: 'Yoga', color: '#00ffff' },
   { id: 5, name: 'Strength', color: '#9933ff' },
    ];

   @action
   updateDay(keyItem) {
     set(this.args.day, 'exercise', keyItem)
   }

   @action
   updateDescription(value) {
   set(this.args.day, 'description', value)}

   isSelectedExercise(keyItem) {
      return this.args.day.exercise !== null && this.args.day.exercise === keyItem;
   }

}
