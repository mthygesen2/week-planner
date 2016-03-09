import Ember from 'ember';

export default Ember.Service.extend({
  foursquareResult: [],

  foursquareRequest(params) {
    var url = 'https://api.foursquare.com/v2/venues/'
    params.client_id = '5DRXWAUORRCB1B1PRICKG3B1ZYXRXGNWA3RKKTRGIARXJVZK';
    params.client_secret = 'RI2F4FEPY1XTAW1ABTLEDA44SW5BCH5SN5FDOS45I5CY0G4W';
  }
});
