import Ember from 'ember';

export default Ember.Service.extend({
  favoriteDinner: '',
  favoriteDrink: '',
  favoriteArt: '',
  location: '',

  add(business) {
    this.get('businesses').addObject(item);
  }
});
