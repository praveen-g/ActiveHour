var twitter_access_token="";

function twitteAccessToken(){
	var xhr= new XMLHttpRequest();
	xhr.open("POST" , "https://api.twitter.com/oauth/request_token", true);
	xhr.send("oauth_callback=http%3A%2F%2Fpraveen-g.github.io%2FActiveHour%2F");
	xhr.setRequestHeader('Authorization','OAuth oauth_consumer_key="plUf1tbImpjYtMeD20bg8xdzh", oauth_nonce="3c5e6a08b3ae3d77ab42cc364b56b54a", oauth_signature="4K39LTLXwXo7y%2Bk%2FUU6groSb4ew%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1457761086", oauth_version="1.0"');
	console.log(xhr.responseText);
	var Twitter = require('twitter-node-client').Twitter;

};
//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

// var Twitter = require('twitter-js-client').Twitter;

// //Get this data from your twitter apps dashboard
// var config = {
//     "consumerKey": "plUf1tbImpjYtMeD20bg8xdzh ",
//     "consumerSecret": "	u7FJ1J1UGjhI3nmTeA87EonkfhnuxI5Ntt55KN62apDHIy3O6R",
//     "accessToken": "XXX",
//     "accessTokenSecret": "XXX",
//     "callBackUrl": "http://praveen-g.github.io/ActiveHour/"
// }

// var twitter = new Twitter(config);