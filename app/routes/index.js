import Ember from 'ember';

export default Ember.Route.extend({
  googleMap: Ember.inject.service(),
  yelpApi: Ember.inject.service(),
  
});
