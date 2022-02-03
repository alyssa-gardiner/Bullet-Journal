import Route from '@ember/routing/route';

const entry1 = {
  prompt: 'Cute things I saw today',
  createdAt: '2022-02-03',
  response: 'A kitten! It was so soft and fluff!',
};
const entry2 = {
  prompt: "Who I'm grateful for today",
  createdAt: '2022-01-29',
  response:
    '<p>Cupcake ipsum dolor sit amet jelly beans tart chocolate cake sesame snaps. Muffin fruitcake gummi bears fruitcake ice cream. Shortbread sweet gummies cotton candy cupcake. Gummi bears marzipan danish marshmallow topping liquorice macaroon gingerbread halvah.</p><p>  Tootsie roll bear claw gingerbread powder caramels lemon drops. Sugar plum carrot cake bear claw bear claw cookie macaroon. Gingerbread sweet croissant caramels liquorice. Apple pie biscuit dragée muffin sesame snaps topping sesame snaps sesame snaps bonbon.</p>',
};

export default class GratitudeRoute extends Route {
  model() {
    const allGratitude = [
      this.store.createRecord('gratitude', entry1),
      this.store.createRecord('gratitude', entry2),
    ];
    return allGratitude;
  }
}
