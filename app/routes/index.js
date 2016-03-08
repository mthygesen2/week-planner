import Ember from 'ember';

export default Ember.Route.extend({
  googleMap: Ember.inject.service(),
  meetupApi: Ember.inject.service()
  model() {
    // var url = "https://api.yelp.com/v2/search?oauth_consumer_key=s5HPEtEzcXAopt3qEA8uyg&oauth_token=kVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH&oauth_signature_method=HMAC-SHA1&oauth_signature=ljsO3PryyOVGZNKO6khIUNddgw0=&oauth_timestamp=1457398190&oauth_nonce=HaNuR9AXie1&location=Portland";
    // return Ember.$.ajax(url, {
    //   dataType: 'jsonp',
    //   jsonpCallback: 'mycallback',
    //   cache: true
    // }).then(function(response) {
    //   console.log(response);
    //   return response.result;
    // });
  },


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
