import Ember from 'ember';

export default Ember.Service.extend({

  googleMaps: window.google.maps,
  lat: '',
  lng: '',
  results: '',
  map: '',
  places: [],
  city: '',
  // mapContainer: document.getElementById('#map'),
  // mapContainer: Ember.String.htmlSafe('<div class="map__google"></div>'),

  findMap(container, options) {
    return new this.googleMaps.Map(container, options);
  },
  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  },
  findAddress(options) {
    console.log('somehow got to the service');
    var self = this;
setTimeout(function(){




  var container = document.getElementById('map');


  console.log(document);
  var address = self.get('city');
  var map = new self.googleMaps.Map(container, options);
  var geocoder = new self.googleMaps.Geocoder();
  var setMarker = self.setMarker(map);
  geocoder.geocode({'address': address}, function(geoResults, status) {
    self.set('results', geoResults[0]);
    if (status === google.maps.GeocoderStatus.OK) {
      map.setCenter(geoResults[0].geometry.location)
      setMarker;
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
}, 200);



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
  },

  setUserMarkers(markerParams) {
    var places = markerParams.places;
    for(var i = 0; i < places.length; i++){
      console.log(places[0]);
      var place = places[i];
      var marker = new google.maps.Marker({
        map: markerParams.map,
        log: console.log(markerParams.map),
        position: {lat: place.lat, lng: place.lng},
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        title: place[0],
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
