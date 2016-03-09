import Ember from 'ember';

export default Ember.Service.extend({
  filters: [
    {
      'id': 1,
      'isNext': [],
      'question': 'Date Night?',
      'answer': [],
      'category': 'dateNight'
    },
      // Date night true:
    {
      'id': 2,
      'isNext': [],
      'question': 'Do you want to get dinner?',
      'answer': [],
      'category': 'dateNight'
    },

    {
      'id': 3,
      'isNext': [],
      'question': 'Drinks before dinner?',
      'answer': [],
      'category': 'dateNight'
    },

    {
      'id': 4,
      'isNext': [],
      'question': 'Movie after dinner?',
      'answer': [],
      'category': 'dateNight'
    },

    {
      'id': 5,
      'isNext': [],
      'question': 'New release, or second run movie?',
      'answer': [],
      'category': 'dateNight'
    },

    {
      'id': 6,
      'isNext': [],
      'question': 'Feel like dancing?',
      'answer': [],
      'category': 'dateNight'
    },
      // Date night false
    {
      'id': 7,
      'isNext': [],
      'question': 'Tech Meetup?',
      'answer': [],
      'category': 'techMeetup'
    },

    {
      'id': 8,
      'isNext': [],
      'question': 'Group Hangout?',
      'answer': [],
      'category': 'groupHangout'
    },

    {
      'id': 9,
      'isNext': [],
      'question': 'Disco?',
      'answer': [],
      'category': 'disco'
    },

    {
      'id': 10,
      'isNext': [],
      'question': 'Are you sure you want to go out tonight?',
      'answer': [],
      'category': 'none'
    },
  ]
});
