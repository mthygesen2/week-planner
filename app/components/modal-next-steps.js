import Ember from 'ember';

export default Ember.Component.extend({
  responseService: Ember.inject.service('user-responses'),
  showModal: true,
  showQuestion1: false,

  actions: {
    showQuestion1() {
      this.set('showModal', false);
      this.set('showQuestion1', true);
    },

    answerQuestion1(response, id) {
      var answerParam = this.get('responseService.filters.0.answer');
      answerParam.addObject(response);
      this.set('showQuestion1', false);
      if (response === true) { // Populate results based on question
        this.set('showQuestion2', true);
        

      } else { // Remove results based on question
        this.set('showQuestion6', true);
      }
    },

    answerQuestion2(response, id) {
      var answerParam = this.get('responseService.filters.1.answer');
      answerParam.addObject(response);
      this.set('showQuestion2', false);

      if (response === true) { // Populate results based on question
        this.set('showQuestion3', true);
      } else { // Remove results based on question
        this.set('showQuestion6', true);
      }
    },

    answerQuestion3(response, id) {
      var answerParam = this.get('responseService.filters.2.answer');
      answerParam.addObject(response);
      this.set('showQuestion3', false);

      if (response === true) { // Populate results based on question
        this.set('showQuestion4', true);
      } else { // Remove results based on question
        this.set('showQuestion6', true);
      }
    },

    answerQuestion4(response, id) {
      var answerParam = this.get('responseService.filters.3.answer');
      answerParam.addObject(response);
      this.set('showQuestion4', false);

      if (response === true) { // Populate results based on question
        this.set('showQuestion5', true);
      } else { // Remove results based on question
        this.set('showQuestion6', true);
      }
    },

    answerQuestion5(response, id) {
      var answerParam = this.get('responseService.filters.4.answer');
      answerParam.addObject(response);
      this.set('showQuestion5', false);

      if (response === true) { // Populate results based on question
        this.set('showQuestion6', true);
      } else { // Remove results based on question
        this.set('showQuestion7', true);
      }
    },

    answerQuestion6(response, id) {
      var answerParam = this.get('responseService.filters.5.answer');
      answerParam.addObject(response);
      this.set('showQuestion6', false);

      if (response === true) { // Populate results based on question
        console.log(this.get('responseService.filters.5.category'))
      } else { // Remove results based on question
        this.set('showQuestion7', true);
      }
    },

    answerQuestion7(response, id) {
      var answerParam = this.get('responseService.filters.6.answer');
      answerParam.addObject(response);
      this.set('showQuestion7', false);

      if (response === true) { // Populate results based on question
        console.log(this.get('responseService.filters.6.category'))
      } else { // Remove results based on question
        this.set('showQuestion8', true);
      }
    },

    answerQuestion8(response, id) {
      var answerParam = this.get('responseService.filters.7.answer');
      answerParam.addObject(response);
      this.set('showQuestion8', false);

      if (response === true) { // Populate results based on question
        console.log(this.get('responseService.filters.7.category'))
      } else { // Remove results based on question
        this.set('showQuestion9', true);
      }
    },

    answerQuestion9(response, id) {
      var answerParam = this.get('responseService.filters.8.answer');
      answerParam.addObject(response);
      this.set('showQuestion9', false);

      if (response === true) { // Populate results based on question
        console.log(this.get('responseService.filters.8.category'))
      } else { // Remove results based on question
        this.set('showQuestion10', true);
      }
    },

    answerQuestion10(response, id) {
      this.set('showQuestion10', false);

      if (response === true) { // Populate results based on question
        this.set('showQuestion1', true);
      } else { // Remove results based on question
        this.set('showQuestion6', true);
      }
    },



  }
});
