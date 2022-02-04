import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import moment from 'moment';

export default class GratitudePostComponent extends Component {
  @service store;
  @tracked draft;
  @tracked error;

  constructor() {
    super(...arguments);
    this.draft = this.store.createRecord('gratitude', {
      prompt: 'Test',
      response: '',
    });
  }

  @action
  save(e) {
    e.preventDefault();
    if (!this.draft.response) {
      this.error = 'A response is required.';
    } else {
      this.error = null;
      this.draft.createdAt = moment().format('YYYY-MM-DD');
      this.args.addEntry(this.draft);
    }
  }
}
