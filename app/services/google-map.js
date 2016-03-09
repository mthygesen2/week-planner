import Ember from 'ember';

export default Ember.Service.extend({
  meetupApi: Ember.inject.service(),
  googleMaps: window.google.maps,
  lat: '',
  lng: '',
  results: '',
  map: '',
  places: [],
  findMap(container, options) {
    return new this.googleMaps.Map(container, options);
  },
  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  },
  findAddress(container, options, address) {
    var map = new this.googleMaps.Map(container, options);
    var geocoder = new this.googleMaps.Geocoder();
    var self = this;
    var setMarker = this.setMarker(map);
    // var findMeetups = this.meetupApi.findMeetups(this.lat, this.lng);
    geocoder.geocode({'address': address}, function(geoResults, status) {
      self.set('results', geoResults[0]);
      //console.log(self.get('results'));
      if (status === google.maps.GeocoderStatus.OK) {
        //console.log(results);
        map.setCenter(geoResults[0].geometry.location)
        setMarker;
        //findMeetups;
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
      self.set('lat', ((self.get('results.geometry.bounds.R.R') + self.get('results.geometry.bounds.R.j')) / 2));
      self.set('lng', ((self.get('results.geometry.bounds.j.R') + self.get('results.geometry.bounds.j.j')) / 2));

      return new Promise(function() {
          return {
            lat: self.get('lat'),
            lng: self.get('lng')
          }
        })
    });
  },
  setMarker(map) {
    var places = this.get('places');
    for(var i = 0; i < places.length; i++) {
      var place = places[i];

      var marker = new google.maps.Marker({
        map: map,
        position: {lat: place[1], lng: place[2]},
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      });
    }
  }
});
