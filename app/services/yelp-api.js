import Ember from 'ember';
// var Yelp = require('yelp');
// import Yelp from 'npm:yelp';
import oauthSignature from 'npm:oauth-signature'

export default Ember.Service.extend({
  yelpResult1: [],
  yelpResult: [],


  getSignature(url, parameters) {
    var httpMethod = 'Get';
    var consumerSecret = 'BLtzvHCPEIe9pHqIh9OPId8jqf4';
	  var tokenSecret = 'M9P4ZXaLGLPAC8sekCYIetzQdaQ';
    return oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});
  },

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  },

  yelpRequest(params, params2) {
    var urlYelp = 'https://api.yelp.com/v2/search';
    var parameters = {
      oauth_consumer_key : 's5HPEtEzcXAopt3qEA8uyg',
      oauth_token : 'kVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH',
      oauth_nonce : (Math.floor(Math.random() * 1e12).toString()),
      oauth_timestamp : Math.floor(Date.now()/1000),
      oauth_signature_method : 'HMAC-SHA1',
      callback: 'mycallback',
    };

    for (var attributeName in parameters) { params[attributeName] = parameters[attributeName]};
    var signature = this.getSignature(urlYelp, params);
    params.oauth_signature = signature;

    for (var attributeName in parameters) { params2[attributeName] = parameters[attributeName]};
    var signature = this.getSignature(urlYelp, params2);
    params2.oauth_signature = signature;
    //
    // console.log(parameters);
    // console.log(parameters2);
    //

    var self = this;
    Ember.$.ajax({
      url: urlYelp,
      data: params,
      dataType: 'jsonp',
      jsonpCallback: 'mycallback',
      cache: true
    }).then(function(response) {
      for (var object of response.businesses) {
        self.get('yelpResult').pushObject(object)

      }

    }).then(function(){
      Ember.$.ajax({
        url: urlYelp,
        data: params2,
        dataType: 'jsonp',
        jsonpCallback: 'mycallback',
        cache: true
      }).then(function(response) {
        for (var object of response.businesses) {
          self.get('yelpResult').pushObject(object)

        }
        self.get('shuffle')(self.get('yelpResult'));
        console.log(self.get('yelpResult'));
      });
    });
  }

});
