import Ember from 'ember';
// import OauthSign from 'npm:oauth-sign'

export default Ember.Service.extend({
  // consumerKey: 's5HPEtEzcXAopt3qEA8uyg',
  // consumerSecret: 'BLtzvHCPEIe9pHqIh9OPId8jqf4',
  // token: 'kVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH',
  // tokenSecret: 'M9P4ZXaLGLPAC8sekCYIetzQdaQ',

  getSignature() {
    var httpMethod = 'Get';
    var url = 'https://api.yelp.com/v2/search',
	  parameters = {
  		oauth_consumer_key : 's5HPEtEzcXAopt3qEA8uyg',
  		oauth_token : 'kVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH',
  		oauth_nonce : 'T9u0N8HPAR2',
  		oauth_timestamp : new Date().getTime(),
  		oauth_signature_method : 'HMAC-SHA1',
  		oauth_version : '1.0',
      location: 'Portland'
  	};
    var consumerSecret = 'BLtzvHCPEIe9pHqIh9OPId8jqf4';
	  var tokenSecret = 'M9P4ZXaLGLPAC8sekCYIetzQdaQ';
    return oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret);
  }

});
