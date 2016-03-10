import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  location: '',

  add(item) {
    this.get('items').addObject(item);
  }
});
