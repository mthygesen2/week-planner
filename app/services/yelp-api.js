import Ember from 'ember';
// var Yelp = require('yelp');
// import Yelp from 'npm:yelp';
import oauthSignature from 'npm:oauth-signature'

export default Ember.Service.extend({
  // consumerKey: 's5HPEtEzcXAopt3qEA8uyg',
  // consumerSecret: 'BLtzvHCPEIe9pHqIh9OPId8jqf4',
  // token: 'kVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH',
  // tokenSecret: 'M9P4ZXaLGLPAC8sekCYIetzQdaQ',


  getSignature(nonce, timestamp, location) {
    // var yelp = new Yelp({
    //   consumer_key: 's5HPEtEzcXAopt3qEA8uyg',
    //   consumer_secret: 'BLtzvHCPEIe9pHqIh9OPId8jqf4',
    //   token: 'kVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH',
    //   token_secret: 'M9P4ZXaLGLPAC8sekCYIetzQdaQ',
    // });
    //
    // yelp.search({ term: 'food', location: 'Montreal' })
    // .then(function (data) {
    //   console.log(data);
    // })
    // .catch(function (err) {
    //   console.error(err);
    // });
    var httpMethod = 'Get';
    var url = 'https://api.yelp.com/v2/search';
	  var parameters = {
  		oauth_consumer_key : 's5HPEtEzcXAopt3qEA8uyg',
  		oauth_token : 'kVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH',
  		oauth_nonce : nonce,
  		// oauth_nonce : 'zrl7Ufr2JTM',
  		// oauth_timestamp : '1457409085',
      oauth_timestamp : timestamp,
  		oauth_signature_method : 'HMAC-SHA1',
      location: location,
      callback: 'mycallback',
  	};
    var consumerSecret = 'BLtzvHCPEIe9pHqIh9OPId8jqf4';
	  var tokenSecret = 'M9P4ZXaLGLPAC8sekCYIetzQdaQ';
    return oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});
    // return yelp;
  }

});
