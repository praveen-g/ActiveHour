
function twitterAccess(){
var cb          = new Codebird;
var current_url = location.toString();
var query       = current_url.match(/\?(.+)$/).split("&amp;");
var parameters  = {};
var parameter;

cb.setConsumerKey("5Y7kd4M5Ucwpufbj95dekJAa2", "6KukfHQyzcSx1AxX0jP9UqSPMKLeeKyBJSVURFbOINN6OyYQG4");

for (var i = 0; i < query.length; i++) {
    parameter = query[i].split("=");
    if (parameter.length === 1) {
        parameter[1] = "";
    }
    parameters[decodeURIComponent(parameter[0])] = decodeURIComponent(parameter[1]);
}

// check if oauth_verifier is set
if (typeof parameters.oauth_verifier !== "undefined") {
    // assign stored request token parameters to codebird here
    // ...
    cb.setToken(stored_somewhere.oauth_token, stored_somewhere.oauth_token_secret);

    cb.__call(
        "oauth_accessToken",
        {
            oauth_verifier: parameters.oauth_verifier
        },
        function (reply, rate, err) {
            if (err) {
                console.log("error response or timeout exceeded" + err.error);
            }
            if (reply) {
                cb.setToken(reply.oauth_token, reply.oauth_token_secret);
            }

            // if you need to persist the login after page reload,
            // consider storing the token in a cookie or HTML5 local storage
        }
    );
}

};

// cb.__call(
//     "oauth_requestToken",
//     {oauth_callback: "oob"},
//     function (reply,rate,err) {
//         if (err) {
//             console.log("error response or timeout exceeded" + err.error);
//         }
//         if (reply) {
//             // stores it
//             cb.setToken(reply.oauth_token, reply.oauth_token_secret);

//             // gets the authorize screen URL
//             cb.__call(
//                 "oauth_authorize",
//                 {},
//                 function (auth_url) {
//                     window.codebird_auth = window.open(auth_url);
//                 }
//             );
//         }
//     }
// );

// <script type="text/javascript">   
// !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="http://platform.twitter.com/anywhere.js?id="+gTWApplicationId;fjs.parentNode.insertBefore(js,fjs);}}(document, "script",'twitter-anywhere');   
// //describe the login actions  
// twttr.anywhere(function (T) {  
// T.bind("authComplete", function (e, user) {  
//         var token = user.attributes._identity;  
//         //define the login function on your client through Twitter  
//     });  
// });  
// //function we link to the click on the custom login button through Twitter  
// function doTWSignIn() {  
//     twttr.anywhere(function (T) {  
//         T.signIn();  
//     });  
// }  
// </script>  


// OAuth.initialize('eHdLrIGV7RLgrsE4tpd2ct249RA');

// //Example with Twitter with the cache option enabled
// OAuth.popup('twitter', {cache: true}).done(function(twitter) {
//   //make API calls with `twitter`
// }).fail(function(err) {
//   //todo when the OAuth flow failed
// })





// var twitter_access_token="";

// function twitterAccessToken(){
// 	var xhr= new XMLHttpRequest();
// 	xhr.open("POST" , "https://api.twitter.com/oauth/request_token", true);
// 	xhr.send("oauth_callback=http%3A%2F%2Fpraveen-g.github.io%2FActiveHour%2F");
// 	xhr.setRequestHeader('Authorization','OAuth oauth_consumer_key="plUf1tbImpjYtMeD20bg8xdzh", oauth_nonce="3c5e6a08b3ae3d77ab42cc364b56b54a", oauth_signature="4K39LTLXwXo7y%2Bk%2FUU6groSb4ew%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1457761086", oauth_version="1.0"');
// 	console.log(xhr.responseText);
// 	//var Twitter = require('twitter-node-client').Twitter;

// };
// //Callback functions
// var error = function (err, response, body) {
//     console.log('ERROR [%s]', err);
// };
// var success = function (data) {
//     console.log('Data [%s]', data);
// };

// var Twitter = require('twitter-js-client').Twitter;

//Get this data from your twitter apps dashboard
// var config = {
//     "consumerKey": "5Y7kd4M5Ucwpufbj95dekJAa2 ",
//     "consumerSecret": "6KukfHQyzcSx1AxX0jP9UqSPMKLeeKyBJSVURFbOINN6OyYQG4",
//     "accessToken": "XXX",
//     "accessTokenSecret": "XXX",
//     "callBackUrl": "http://praveen-g.github.io/ActiveHour/"
// }

// var twitter = new Twitter(config);