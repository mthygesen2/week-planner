import Ember from 'ember';

export default Ember.Service.extend({
  businesses: [],
  location: '',

  add(business) {
    this.get('businesses').addObject(item);
  }
});
