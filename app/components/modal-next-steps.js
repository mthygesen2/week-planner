import Ember from 'ember';

export default Ember.Component.extend({
  firstQuestion: false,
  questions: {
    firstQuestion: '',
    secondQuestion: '',
  },
  
  actions: {
    showFirstQuestion() {
      this.set('showFirstQuestion', true);
    }
  }
});
