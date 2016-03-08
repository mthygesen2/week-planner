import Ember from 'ember';
// var Yelp = require('yelp');
// import Yelp from 'npm:yelp';
import oauthSignature from 'npm:oauth-signature'

export default Ember.Service.extend({
  yelpResult: 'asd',
  // consumerKey: 's5HPEtEzcXAopt3qEA8uyg',
  // consumerSecret: 'BLtzvHCPEIe9pHqIh9OPId8jqf4',
  // token: 'kVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH',
  // tokenSecret: 'M9P4ZXaLGLPAC8sekCYIetzQdaQ',


  getSignature(url, parameters) {
    var httpMethod = 'Get';
    var consumerSecret = 'BLtzvHCPEIe9pHqIh9OPId8jqf4';
	  var tokenSecret = 'M9P4ZXaLGLPAC8sekCYIetzQdaQ';
    return oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});
    // return yelp;
  },

  yelpRequest() {

    var params = {
      location: 'Portland',
    };
    var urlYelp = 'https://api.yelp.com/v2/search';
    var parameters = {
      oauth_consumer_key : 's5HPEtEzcXAopt3qEA8uyg',
      oauth_token : 'kVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH',
      oauth_nonce : (Math.floor(Math.random() * 1e12).toString()),
      // oauth_nonce : 'zrl7Ufr2JTM',
      // oauth_timestamp : '1457409085',
      oauth_timestamp : Math.floor(Date.now()/1000),
      oauth_signature_method : 'HMAC-SHA1',
      callback: 'mycallback',
    };
    for (var attributeName in params) { parameters[attributeName] = params[attributeName]};

    var httpMethod = 'Get';
    var consumerSecret = 'BLtzvHCPEIe9pHqIh9OPId8jqf4';
    var tokenSecret = 'M9P4ZXaLGLPAC8sekCYIetzQdaQ';
    var signature = oauthSignature.generate(httpMethod, urlYelp, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

    parameters.oauth_signature = signature;
    // console.log(signature)
    var result;
    var self = this;
    result = Ember.$.ajax({
      url: urlYelp,
      data: parameters,
      dataType: 'jsonp',
      jsonpCallback: 'mycallback',
      cache: true
    }).then(function(response) {
      // this.result = response;
      // console.log(response.businesses);
      self.set('yelpResult', response.businesses);
      console.log(self.get('yelpResult'));
      // this.set('yelpResult', response);
      // this.set('isShowes', true);
      // console.log(JSON.stringify(response));
      return response.businesses;
    });
  }

});
