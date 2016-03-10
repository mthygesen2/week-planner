import Ember from 'ember';

export default Ember.Service.extend({
  items: [{
    firstSelection: {
      lat: '45.5200',
      lng: '-122.6819'
    }
  }],
  location: '45.5200, -122.6819',

  add(item) {
    this.get('items').addObject(item);
  }
});
