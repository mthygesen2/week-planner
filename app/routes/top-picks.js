import Ember from 'ember';

export default Ember.Route.extend({
  googleMap: Ember.inject.service(),
  meetupApi: Ember.inject.service(),
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

    meetupRequestToService() {
      console.log(this.get('googleMap.results'));
      var params = {
        lat: this.get('googleMap.results.lat'),
        lng: this.get('googleMap.results.lng')
      };
      this.get('meetupApi').findMeetups(params.lat, params.lng);
    }
  }
});
