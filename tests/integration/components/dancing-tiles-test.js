import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dancing-tiles', 'Integration | Component | dancing tiles', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{dancing-tiles}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#dancing-tiles}}
      template block text
    {{/dancing-tiles}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
