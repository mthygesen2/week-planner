import Ember from 'ember';


export default Ember.Route.extend({


  actions: {
    toFinalMap() {
      this.transitionTo('final');
    }
  }
});
