import Ember from 'ember';

export default Ember.Service.extend({
  businesses: [{
    businessName: {
      lat: 44.9308,
      lnt: 123.0289
    }
  }],
  location: '',

  add(business) {
    this.get('businesses').addObject(item);
  }
});
