import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modal-next-steps', 'Integration | Component | modal next steps', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{modal-next-steps}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#modal-next-steps}}
      template block text
    {{/modal-next-steps}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
