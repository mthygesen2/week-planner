import Ember from 'ember';

export default Ember.Component.extend({
  foursquareApi: Ember.inject.service(),

  actions: {
    getLocation() {
      var params = {
        limit: 10,
        near: this.get('location'),
      };
      var self = this;
      this.get('foursquareApi').foursquareRequest('explore', params).then(function() {
        self.sendAction('getLocation');
      });
    }
  }
});
