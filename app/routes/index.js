import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var url = "https://api.yelp.com/v2/search?oauth_consumer_key=s5HPEtEzcXAopt3qEA8uyg&oauth_token=kVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH&oauth_signature_method=HMAC-SHA1&oauth_signature=ljsO3PryyOVGZNKO6khIUNddgw0=&oauth_timestamp=1457398190&oauth_nonce=HaNuR9AXie1&location=Portland";
    return Ember.$.ajax(url, {
      dataType: 'jsonp',
      jsonpCallback: 'mycallback',
      cache: true
    }).then(function(response) {
      console.log(response);
      return response.result;
    });
  },
});
