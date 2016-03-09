import Ember from 'ember';

export default Ember.Component.extend({
  yelpApi: Ember.inject.service(),
  ajax: Ember.inject.service(),
  yelpResult: '',
  isShowes: false,

  actions: {
    sendRequestToService() {
      var params = {
        limit: 5,
        term: 'food',
        // term: 'Laundry',
        // term: 'activity',
      };

      var params2 = {
        limit: 5,
        term: 'laundry',
      }
      if (this.get('location')) {
        params.location = this.get('location');
        params2.location = this.get('location');
      }
      this.get('yelpApi').yelpRequest(params, params2);
    }
  }
});
