import Model, { attr } from '@ember-data/model';

export default class DayModel extends Model {
  @attr() monthNumber;
  @attr() dayOfMonth;
  @attr() exerciseId;
}
