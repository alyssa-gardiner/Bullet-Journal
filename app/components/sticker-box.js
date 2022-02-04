import Component from '@glimmer/component';

export default class StickerBoxComponent extends Component {
  stickerList = [
    { id: 1, name: 'Cherry Blossom', img: '🌸' },
    { id: 2, name: 'Four Leaf Clover', img: '🍀' },
    { id: 3, name: 'Flex', img: '💪' },
    { id: 4, name: 'Trophy', img: '🏆' },
    { id: 5, name: 'Triumph', img: '😤' },
  ];
}
