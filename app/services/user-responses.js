import Ember from 'ember';

export default Ember.Service.extend({
  filters: [
    {
      'id': 1,
      'question': 'Date Night?',
      'answer': [],
      'category': 'dateNight'
    },
      // Date night true:
    {
      'id': 2,
      'question': 'Do you want to get dinner?',
      'answer': [],
      'category': 'dateNight'
    },

    {
      'id': 3,
      'question': 'Drinks before dinner?',
      'answer': [],
      'category': 'dateNight'
    },

    {
      'id': 4,
      'question': 'Movie after dinner?',
      'answer': [],
      'category': 'dateNight'
    },

    {
      'id': 5,
      'question': 'Second run movie?',
      'answer': [],
      'category': 'dateNight'
    },

    {
      'id': 6,
      'question': 'Feel like dancing?',
      'answer': [],
      'category': 'dateNight'
    },
      // Date night false
    {
      'id': 7,
      'question': 'Tech Meetup?',
      'answer': [],
      'category': 'techMeetup'
    },

    {
      'id': 8,
      'question': 'Group Hangout?',
      'answer': [],
      'category': 'groupHangout'
    },

    {
      'id': 9,
      'question': 'Disco?',
      'answer': [],
      'category': 'disco'
    },

    {
      'id': 10,
      'question': 'Are you sure you want to go out tonight?',
      'answer': [],
      'category': 'none'
    },
  ]
});
