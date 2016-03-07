import Ember from 'ember';

export default Ember.Route.extend({
  googleMap: Ember.inject.service(),

  // initMap() {
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 8,
  //     center: {lat: -34.397, lng: 150.644}
  //   });
  //   var geocoder = new google.maps.Geocoder();
  //
  //   document.getElementById('submit').addEventListener('click', function() {
  //     geocodeAddress(geocoder, map);
  //   });
  // },



actions: {
    //  geocodeAddress(geocoder, resultsMap, address) {
    // //var address = document.getElementById('address').value;
    //   geocoder.geocode({'address': address}, function(results, status) {
    //     if (status === google.maps.GeocoderStatus.OK) {
    //       resultsMap.setCenter(results[0].geometry.location);
    //       var marker = new google.maps.Marker({
    //         map: resultsMap,
    //         position: results[0].geometry.location
    //       });
    //     } else {
    //       alert('Geocode was not successful for the following reason: ' + status);
    //     }
    //   });
    // }

  }
});
