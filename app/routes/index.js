import Ember from 'ember';

export default Ember.Route.extend({
  googleMap: Ember.inject.service(),
  yelpApi: Ember.inject.service(),

  actions: {
    updateRequestFromModal(userSelection) {
      console.log(userSelection);
      var params = {
        userSelection,
        limit: 10,
        location: this.get('googleMap.results.formatted_address'),
      };
      this.get('yelpApi').yelpRequest(params);
    }
  }
});
