import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  //map = new
  findMap(container, options) {
    return new this.googleMaps.Map(container, options);
  },
  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  },
  findAddress(container, options, address) {
    var map = new this.googleMaps.Map(container, options);
    var geocoder = new this.googleMaps.Geocoder();
    geocoder.geocode({'address': address}, function(geoResults, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        map.setCenter(geoResults[0].geometry.location)
        var marker = new google.maps.Marker({
          map: map,
          position: geoResults[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
});
