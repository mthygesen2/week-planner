import Ember from 'ember';

export default Ember.Component.extend({
  responseService: Ember.inject.service('user-responses'),
  showQuestions: false,
  index: 1,

  actions: {
    showQuestions() {
      this.set('showQuestions', true);
      // this.set('nextQuestion', );
    },
    // var this.get('responseService.filters.' + id) = false,
    answerQuestion(response, id) {
      var nextQuestion = id + 1;
      var answerParam = this.get('responseService.filters.' + id + '.answer');
      answerParam.addObject(response);
      if (response === false) { // Remove results based on question
        this.set('currentId', nextQuestion);
      } else { // Populate results based on question
        this.set('currentId', true);
      }
      this.set('showQuestionOne', false);
    },
  }
});
