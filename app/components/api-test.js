import Ember from 'ember';

export default Ember.Component.extend({
  yelpApi: Ember.inject.service(),
  ajax: Ember.inject.service(),

  actions: {
    sendRequest(model) {
      var params = "Portland";
      var date = Math.floor(Date.now()/1000);
      var nonce = (Math.floor(Math.random() * 1e12).toString());
      // var date = '1457409718';
      // var nonce = 'ny14CGoipTy';
      var signature = this.get('yelpApi').getSignature(nonce, date, params);
      console.log(date)
      var url = 'https://api.yelp.com/v2/search?oauth_consumer_key=s5HPEtEzcXAopt3qEA8uyg&oauth_token=kVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH&oauth_signature_method=HMAC-SHA1&oauth_signature='+signature+ '&oauth_timestamp='+date+'&oauth_nonce='+nonce+'&location='+params;
      return Ember.$.ajax(url, {
        dataType: 'jsonp',
        jsonpCallback: 'mycallback',
        cache: true
      }).then(function(response) {
        console.log(response);
        return response.result;
      });
    }
  }
});


//
// GET\u0026https%3A%2F%2Fapi.yelp.com%2Fv2%2Fsearch\u0026location%3DPortland%26oauth_consumer_key%3Ds5HPEtEzcXAopt3qEA8uyg%26oauth_nonce%3DJTrdAENXTOT%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1457395198%26oauth_token%3DkVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH
//
// GET\u0026https%3A%2F%2Fapi.yelp.com%2Fv2%2Fsearch\u0026location%3DPortland%26oauth_consumer_key%3Ds5HPEtEzcXAopt3qEA8uyg%26oauth_nonce%3D3QrImBghW3N%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1457395335%26oauth_token%3DkVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH
//
//
// https://api.yelp.com/v2/search?oauth_consumer_key=s5HPEtEzcXAopt3qEA8uyg&oauth_token=kVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH&oauth_signature_method=HMAC-SHA1&oauth_signature=jQ/SnGSgmRYfZzDGk3wHYlG85dc=&oauth_timestamp=1457395508&oauth_nonce=6rVF0tWCb0o&location=Portland
//
// https://api.yelp.com/v2/search?oauth_consumer_key=s5HPEtEzcXAopt3qEA8uyg&oauth_token=kVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH&oauth_signature_method=HMAC-SHA1&oauth_signature=wOKQz3jxhTemel/wvYqpO+DymIY=&oauth_timestamp=1457395198&oauth_nonce=JTrdAENXTOT&location=Portland
