import Ember from 'ember';

export default Ember.Component.extend({
  responseService: Ember.inject.service('user-responses'),
  showQuestions: true,
  showQuestionOne: true,
  showQuestionTwo: false,
  showQuestionThree: false,
  showQuestionFour: false,

  actions: {
    answerQuestionOne(response) {
      var serviceAnswerParam = this.get('responseService.filters.1.answer');
      serviceAnswerParam.addObject(response);
      if (response === false) {
        this.set('showQuestionTwo', true);
        console.log('Remove results related to date night');
      } else {
        this.set('showQuestionFive', true);
        console.log('Populate results for date night')
      }
      this.set('showQuestionOne', false);
    },

    answerQuestionTwo(response) {
      var serviceAnswerParam = this.get('responseService.filters.2.answer');
      serviceAnswerParam.addObject(response);
      if (response === false) {
        console.log('Remove results related to question 2 params');
      } else {
        console.log('Populate tech meetups');
      }
      this.set('showQuestionTwo', false);
      this.set('showQuestionThree', true);
    },

    answerQuestionThree(response) {
      var serviceAnswerParam = this.get('responseService.filters.3.answer');
      serviceAnswerParam.addObject(response);
      if (response === false) {
        console.log('Remove Group Hangouts');
      } else {
        console.log('Populate Group Hangouts')
      }
      this.set('showQuestionThree', false);
      this.set('showQuestionFour', true);
    },

    answerQuestionFour(response) {
      var serviceAnswerParam = this.get('responseService.filters.4.answer');
      serviceAnswerParam.addObject(response);
      if (response === false) {
        console.log('Remove Disco');
      } else {
        console.log('Populate Disco');
      }
      this.set('showQuestionFour', false);
    },
  }
});
