import { htmlSafe } from '@ember/template';
import Component from '@glimmer/component';

export default class GratitudeEntryComponent extends Component {
  get parsedResponse() {
    return htmlSafe(this.args.entry.response);
  }
}
