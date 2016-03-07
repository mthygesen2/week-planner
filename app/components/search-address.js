import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    standardGeocode() {
      var address = this.get('address');
      this.sendAction('standardGeocode', address);
    }
  }
});
