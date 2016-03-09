import Ember from 'ember';

export default Ember.Component.extend({
  responseService: Ember.inject.service('user-responses'),
  showQuestionOne: true,
  showQuestionTwo: false,
  showQuestionThree: false,
  showQuestionFour: false,

  actions: {
    answerQuestionOne(response) {
      var serviceAnswerParam = this.get('responseService.filters.criteriaOne.answer');
      serviceAnswerParam.addObject(response);
      if (response === false) {
        console.log('Remove results related to date night');
      } else {
        console.log('Populate results for date night')
      }
      this.set('showQuestionOne', false);
      this.set('showQuestionTwo', true);
    },

    answerQuestionTwo(response) {
      var serviceAnswerParam = this.get('responseService.filters.criteriaTwo.answer');
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
      var serviceAnswerParam = this.get('responseService.filters.criteriaThree.answer');
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
      var serviceAnswerParam = this.get('responseService.filters.criteriaFour.answer');
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
