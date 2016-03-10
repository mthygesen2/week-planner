import Ember from 'ember';

export default Ember.Route.extend({
  googleMap: Ember.inject.service(),
  yelpApi: Ember.inject.service(),
  foursquareApi: Ember.inject.service(),

  actions: {
    updateRequestFromModal(userSelection) {
      console.log(userSelection);
      var params = {
        userSelection,
        limit: 10,
        near: this.get('googleMap.results.formatted_address'),
      };
      this.get('foursquareApi').foursquareRequest('explore', params);
    },
  }
});
