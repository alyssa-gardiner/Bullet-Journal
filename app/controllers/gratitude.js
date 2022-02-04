import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GratitudeController extends Controller {
  @tracked showGratitudeModal = false;

  @action
  addEntry(newEntry) {
    console.log(newEntry);
    console.log(this.model);
    this.model.unshiftObject(newEntry);
    this.showGratitudeModal = false;
  }
}
