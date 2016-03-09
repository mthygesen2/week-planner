import Ember from 'ember';

export default Ember.Service.extend({

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
    geocoder.geocode({'address': address}, function(geoResults, status) {
      self.set('results', geoResults[0]);
      console.log(self.get('results'));
      if (status === google.maps.GeocoderStatus.OK) {
        map.setCenter(geoResults[0].geometry.location)
        setMarker;
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
      self.set('lat', ((self.get('results.geometry.bounds.R.R') + self.get('results.geometry.bounds.R.j')) / 2));
      self.set('lng', ((self.get('results.geometry.bounds.j.R') + self.get('results.geometry.bounds.j.j')) / 2));
    });
  },
  setMarker(map) {
    var places = this.get('places');
    for(var i = 0; i < places.length; i++){
      var place = places[i];
      var marker = new google.maps.Marker({
        map: map,
        position: {lat: place[1], lng: place[2]},
        //icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        title: place[0]
      });

      marker.info = new google.maps.InfoWindow({
        content: place[0] +
        "<br>" +
        place[3]
      })
      google.maps.event.addListener(marker, 'click', function() {
        this.info.open(map, this);
      });
    //}
    }
  }
});
