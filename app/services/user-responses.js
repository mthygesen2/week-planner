import Ember from 'ember';

export default Ember.Service.extend({
  filters: {
    criteriaOne: {
      id: 1,
      question: 'Date Night?',
      answer: [],
    },
    criteriaTwo: {
      id: 2,
      question: 'Tech Meetup?',
      answer: [],
    },
    criteriaThree: {
      id: 3,
      question: 'Group Hangout?',
      answer: [],
    },
    criteriaFour: {
      id: 4,
      question: 'Disco?',
      answer: [],
    },
  }
});
