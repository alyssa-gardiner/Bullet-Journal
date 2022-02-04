import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import moment from 'moment';

const samplePrompts = [
  'What I focused on today',
  'Cute things I saw today',
  'New things I tried today',
  'Ways I supported others today',
  'Ways I loved myself today',
  'Fun things I did today',
  'Ways I supported others today',
  'Ways I challenged myself today',
  'What inspired me today',
  'What I let go of today',
];

export default class GratitudePostComponent extends Component {
  @service store;
  @tracked draft;
  @tracked error;

  constructor() {
    super(...arguments);
    this.draft = this.store.createRecord('gratitude', {
      prompt: samplePrompts.random(),
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

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};
