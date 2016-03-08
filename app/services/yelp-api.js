import Ember from 'ember';
// var Yelp = require('yelp');
// import Yelp from 'npm:yelp';
import oauthSignature from 'npm:oauth-signature'

export default Ember.Service.extend({
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
  }

});
