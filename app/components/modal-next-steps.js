import Ember from 'ember';

export default Ember.Component.extend({
  responseService: Ember.inject.service('user-responses'),
  showQuestions: true,
  showQuestionOne: true,
  showQuestionTwo: false,
  showQuestionThree: false,
  showQuestionFour: false,

  actions: {
    answerQuestion(response, id) {
      var answerParam = this.get('responseService.filters.' + id + '.answer');
      answerParam.addObject(response);
      console.log(this.get('responseService.filters.' + id + '.answer'));
      if (response === false) {
        this.set('showQuestionTwo', true);
        // Remove results related to date night
      } else {
        this.set('showQuestionFive', true);
        // Populate results for date night
      }
      this.set('showQuestionOne', false);
    },

    answerQuestionTwo(response) {
      var serviceAnswerParam = this.get('responseService.filters.2.answer');
      serviceAnswerParam.addObject(response);
      if (response === false) {
        // Remove results related to question 2 params'
      } else {
        // Populate tech meetups
      }
      this.set('showQuestionTwo', false);
      this.set('showQuestionThree', true);
    },

    answerQuestionThree(response) {
      var serviceAnswerParam = this.get('responseService.filters.3.answer');
      serviceAnswerParam.addObject(response);
      if (response === false) {
        // Remove Group Hangouts
      } else {
        // Populate Group Hangouts
      }
      this.set('showQuestionThree', false);
      this.set('showQuestionFour', true);
    },

    answerQuestionFour(response) {
      var serviceAnswerParam = this.get('responseService.filters.4.answer');
      serviceAnswerParam.addObject(response);
      if (response === false) {
        // Remove Disco
      } else {
        // Populate Disco
      }
      this.set('showQuestionFour', false);
    },
  }
});
