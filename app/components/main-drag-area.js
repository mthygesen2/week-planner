import Ember from 'ember';

export default Ember.Component.extend({
  foursquareApi: Ember.inject.service(),
  googleMaps: Ember.inject.service(),
  selectedItems: Ember.inject.service(),

  actions: {
    droppedDinner(businessId) {
      var business = this.get('foursquareApi.foursquareDrinks')
      var selectedItems = this.get('selectedItems.businesss');
      var business = this.get('model').findBy('id', parseInt(businessId));

      if(!selectedItems.contains(business)){
        return selectedItems.pushObject(business);
      }
    },

    droppedDrinks(businessId) {
      var business = this.get('foursquareApi.foursquareDrinks')
      var selectedItems = this.get('selectedItems.businesss');
      var business = this.get('model').findBy('id', parseInt(businessId));

      if(!selectedItems.contains(business)){
        return selectedItems.pushObject(business);
      }
    },

    droppedActivity(businessId) {
      var business = this.get('foursquareApi.foursquareDrinks')
      var selectedItems = this.get('selectedItems.businesss');
      var business = this.get('business').findBy('id', parseInt(businessId));

      if(!selectedItems.contains(business)){
        return selectedItems.pushObject(business);
      }
    },

    remove(business) {
      return this.get('selectedItems.businesses').removeObject(business);
    }
  }
});
