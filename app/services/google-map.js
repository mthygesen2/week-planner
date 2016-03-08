import Ember from 'ember';

export default Ember.Service.extend({
  meetupApi: Ember.inject.service(),
  googleMaps: window.google.maps,
  lat: '',
  lng: '',
  results: '',

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
    geocoder.geocode({'address': address}, function(geoResults, status) {
      self.set('results', geoResults[0]);
      console.log(self.get('results'));
      if (status === google.maps.GeocoderStatus.OK) {
        //console.log(results);
        map.setCenter(geoResults[0].geometry.location)
        var marker = new google.maps.Marker({
          map: map,
          position: geoResults[0].geometry.location
        });

      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
      //console.log(self.get('results'));
      self.set('lat', ((self.get('results.geometry.bounds.R.R') + self.get('results.geometry.bounds.R.j')) / 2));
      self.set('lng', ((self.get('results.geometry.bounds.j.R') + self.get('results.geometry.bounds.j.j')) / 2));
      console.log(self.get('lat'));
      console.log(self.get('lng'));
    });
  },
});
