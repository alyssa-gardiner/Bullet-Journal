import Model, { attr } from '@ember-data/model';

export default class ExerciseModel extends Model {
  @attr('string') name;
  @attr('string') color;
}
