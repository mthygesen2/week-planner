import Ember from 'ember';

export default Ember.Component.extend({
  selectedItems: Ember.inject.service(),

  actions: {
    dropped(itemId) {
      var selectedItems = this.get('selectedItems.items');
      var item = this.get('model').findBy('id', parseInt(itemId));

      if(!selectedItems.contains(item)){
        return selectedItems.pushObject(item);
      }
    },

    remove(item) {
      return this.get('selectedItems.items').removeObject(item);
    }
  }
});
