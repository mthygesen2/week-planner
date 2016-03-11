import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  userSelection: Ember.inject.service('selected-items'),

  init(){
    console.log("Got to init");
    this._super(...arguments);
    var results = '';
    var map = this.get('map');
    var choices = this.get('userSelection.businesses');
    var self = this;
    var options = {
      zoom: 13,
    };
    map.findAddress(options);
  },

  actions: {
    // showFinalMap() {
    //   var address = this.get('userSelection.location');
    //   console.log(address);
    //   this.set('map.city', address);
    //   var container = this.$('.final__google')[0];
    //   var map = this.get('map');
    //   var self = this;
    //   var options = {
    //     zoom: 13,
    //     center: {lat: -34.397, lng: 150.644}
    //   };
    //   map.findAddress(container, options, address).then(function(values) {
    //
    //   })
    // }
  }
});
