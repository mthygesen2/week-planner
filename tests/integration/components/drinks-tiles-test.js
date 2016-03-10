import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('drinks-tiles', 'Integration | Component | drinks tiles', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{drinks-tiles}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#drinks-tiles}}
      template block text
    {{/drinks-tiles}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
