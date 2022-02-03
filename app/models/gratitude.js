import Model, { attr } from '@ember-data/model';

export default class GratitudeModel extends Model {
  @attr('string') prompt;
  @attr('string') response;
  @attr('date') createdAt;
}
