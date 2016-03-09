import Ember from 'ember';

var items = [{
  id: 1,
  name: "Place 1",
}, {
  id: 2,
  name: "Place 2",
}]
export default Ember.Route.extend({
  googleMap: Ember.inject.service(),
  yelpApi: Ember.inject.service(),

  model() {
    return items;
  }
});
