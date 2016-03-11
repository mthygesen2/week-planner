import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  userSelection: Ember.inject.service('selected-items'),
  init() {
    this._super(),
    Ember.run.later((function() {
      showFinalMap();
    }), 1000);
  },

  actions: {
    showFinalMap() {
      var address = this.get('userSelection.location');
      console.log(address);
      this.set('map.city', address);
      var container = this.$('.final__google')[0];
      var map = this.get('map');
      var self = this;
      var options = {
        zoom: 13,
        center: {lat: -34.397, lng: 150.644}
      };
      map.findAddress(container, options, address).then(function(values) {

      })
    }
  }
});
