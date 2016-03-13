
function twitterAccess(){
    
    var cb          = new Codebird;
    cb.setConsumerKey("5Y7kd4M5Ucwpufbj95dekJAa2", "6KukfHQyzcSx1AxX0jP9UqSPMKLeeKyBJSVURFbOINN6OyYQG4");
    
    var current_url = window.location.href.toString();
    var query       = current_url.match(/\?(.+)$/).split("&amp;");
    var parameters  = {};
    var parameter;

    
   
    for (var i = 0; i < query.length; i++) {
        parameter = query[i].split("=");
        if (parameter.length === 1) {
            parameter[1] = "";
        }
        parameters[decodeURIComponent(parameter[0])] = decodeURIComponent(parameter[1]);
    }

    // check if oauth_verifier is set 
    if (typeof parameters.oauth_verifier !== "undefined") {
        console.log(parameters);
        cb.setToken(stored_somewhere.oauth_token, stored_somewhere.oauth_token_secret);
     
        cb.__call(
            "oauth_accessToken",
            {
                oauth_verifier: parameters.oauth_verifier
            },
            function (reply) {
                cb.setToken(reply.oauth_token, reply.oauth_token_secret);
     
                // if you need to persist the login after page reload, 
                // consider storing the token in a cookie or HTML5 local storage 
            }
        );
    }
}

// };

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

