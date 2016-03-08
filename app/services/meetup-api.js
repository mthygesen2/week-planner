import Ember from 'ember';

export default Ember.Service.extend({
  map: Ember.inject.service('google-map'),
  lat: map.lat,
  lng: map.lng,
  meetups: '',

  findMeetups() {
    var url = 'https://api.meetup.com/2/open_events?&sign=true&photo-host=public&lat=' + this.lat + '&text=tech&lon='+ this.lng +'&order=trending&page=20&desc=true';
    return Ember.$.getJSON(url).then(function(responseJSON) {
        var events = [];
        responseJSON.results.forEach(function(event) {
          events.push(event);
        });
        return events;
      });
    }


});
