import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  userSelection: Ember.inject.service('selected-items'),

  init(){
    this._super(...arguments);
    var results = '';
    var map = this.get('map');
    var dinner = this.get('userSelection.favoriteDinner');
    var drink = this.get('userSelection.favoriteDrink');
    var art = this.get('userSelection.favoriteArt');
    var location = this.get('userSelection.location');
    var self = this;
    var markerParams = {
      map: this.get('map'),
      position: {lat: location.lat, lng: location.lng},
      places: dinner + drink + art,
      log: console.log(this.get('places'))
    }
    var options = {
      zoom: 13,
    };
    map.findAddress(options);
    map.setUserMarkers(markerParams);
  },

  actions: {

  }
});
