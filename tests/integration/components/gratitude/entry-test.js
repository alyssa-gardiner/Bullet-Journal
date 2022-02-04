import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gratitude/entry', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Gratitude::Entry />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Gratitude::Entry>
        template block text
      </Gratitude::Entry>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
