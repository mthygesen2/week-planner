import Ember from 'ember';

export default Ember.Service.extend({
  foursquareResult: [],

  foursquareRequest(queryType, params) {
    var url = 'https://api.foursquare.com/v2/venues/' + queryType;
    params.client_id = '5DRXWAUORRCB1B1PRICKG3B1ZYXRXGNWA3RKKTRGIARXJVZK';
    params.client_secret = 'RI2F4FEPY1XTAW1ABTLEDA44SW5BCH5SN5FDOS45I5CY0G4W';
    params.venuePhotos = 1;
    params.v = 20160309;
    var self = this;
    Ember.$.ajax({
      url: url,
      data: params,
      dataType: 'jsonp',
      jsonpCallback: 'mycallback',
      cache: true
    }).then(function(response) {
      for (var item of response.response.groups[0].items){
        var venue = {
          name: item.venue.name,
          category: item.venue.categories[0].name,
          photo: item.venue.featuredPhotos.items[0].prefix + 'original' + item.venue.featuredPhotos.items[0].suffix || '',
          contact: item.venue.contact.formatedPhone,
          isOpenNow: item.venue.hours.isOpen,
          hoursStatus: item.venue.hours.status,
          location: item.venue.location,
          rating: 9.6,
        }
        self.get('foursquareResult').pushObject(venue);
      }
      // self.set('foursquareResult', response.response.groups[0]);
      // console.log(JSON.stringify(self.get('yelpResult')));
      console.log(self.get('foursquareResult'));
      // console.log(response.response.groups[0].items[1]);
      return response.businesses;
    });
  }
});
