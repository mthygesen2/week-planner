import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  userSelection: Ember.inject.service('selected-items'),

  actions: {
    showFinalMap() {
      var address = this.get('userSelection.location');
      this.set('map.city', address);
      var container = this.$('.map-div')[0];
      var map = this.get('map');
      var self = this;
      var options = {
        zoom: 13,
      };
      map.findAddress(container, options, address).then(function(values) {
        var selection = self.get('userSelection');
        selection.items(firstSelection.lat, firstSelection.lng);
      })
    }
  }
});
