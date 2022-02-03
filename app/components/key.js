import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';

export default class KeyComponent extends Component {

  @tracked keyItems = [
    { id: 1, name: 'Run', color: '#ff3399' },
    { id: 2, name: 'Walk', color: '#ffff00' },
    { id: 3, name: 'Bike', color: '#66ff33' },
    { id: 4, name: 'Yoga', color: '#00ffff' },
    { id: 5, name: 'Strength', color: '#9933ff' },
  ];

  @action
  onColorChange(keyItemName, newColor) {
  this.keyItems = this.keyItems.map(item => {
    if(item.name === keyItemName) {
      item.color = newColor;
    }
    return item;
  });
  }
}
