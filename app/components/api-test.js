import Ember from 'ember';

export default Ember.Component.extend({
  yelpApi: Ember.inject.service(),

  actions: {
    sendRequest() {
      console.log(this.get('yelpApi').getSignature());
    }
  }
});
