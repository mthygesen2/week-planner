import Ember from 'ember';

export default Ember.Component.extend({
  yelpApi: Ember.inject.service(),
  ajax: Ember.inject.service(),
  yelpResult: '',
  isShowes: false,

  actions: {
    sendRequest() {
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
      var signature = this.get('yelpApi').getSignature(urlYelp, parameters);
      parameters.oauth_signature = signature;
      var result;
      Ember.$.ajax({
        url: urlYelp,
        data: parameters,
        dataType: 'jsonp',
        jsonpCallback: 'mycallback',
        cache: true
      }).then(function(response) {
        // this.result = response;
        console.log(response);
        result = response;
        // this.set('yelpResult', response);
        // this.set('isShowes', true);
        // console.log(JSON.stringify(response));
        return response.result;
      });
      console.log(result);
      // console.log(result);
      // console.log(searchYelp(params));
    },

    sendRequestToService() {
      this.get('yelpApi').yelpRequest();
    }
  }
});

//http://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call
