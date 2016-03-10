import Ember from 'ember';

export default Ember.Component.extend({
  foursquareApi: Ember.inject.service(),
  selectedItems: Ember.inject.service(),

  actions: {
    getLocation() {
      var location = this.get('location');
      var paramsDrinks = {
        limit: 15,
        section: 'drinks',
        near: location,
      };
      var paramsDinners = {
        limit: 15,
        section: 'food',
        near: location,
      };
      var paramsArts = {
        limit: 15,
        section: 'arts',
        near: location,
      };
      //clear foursquare results for new search
      this.set('foursquareApi.foursquareDrinks', []);
      this.set('foursquareApi.foursquareDinners', []);
      this.set('foursquareApi.foursquareArts', []);
      this.get('selectedItems').location = location;
      var self = this;
      this.get('foursquareApi').foursquareRequest('explore', paramsDrinks).then(function(){
        self.get('foursquareApi').foursquareRequest('explore', paramsDinners).then(function() {
          self.get('foursquareApi').foursquareRequest('explore', paramsArts).then(function() {
            self.sendAction('getLocation');
          });
        });
      });

    }
  }
});
