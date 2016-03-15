var cb          = new Codebird;
cb.setConsumerKey("5Y7kd4M5Ucwpufbj95dekJAa2", "6KukfHQyzcSx1AxX0jP9UqSPMKLeeKyBJSVURFbOINN6OyYQG4");

var twitterToken = "";
var twitterSecret = "";

function twitterAuthorize(){
    
    cb.__call(
        "oauth_requestToken",
        {oauth_callback: "oob"},
        function (reply) {
            // stores it 
            cb.setToken(reply.oauth_token, reply.oauth_token_secret);
     
            // gets the authorize screen URL 
            cb.__call(
                "oauth_authorize",
                {},
                function (auth_url) {
                    window.codebird_auth = window.open(auth_url);
                }
            );
        }

    );

}

function getTwitterAccessToken(){
    console.log(document.getElementById("PINFIELD").value);
    cb.__call(
        "oauth_accessToken",
        {oauth_verifier: document.getElementById("PINFIELD").value},
        function (reply) {
            // store the authenticated token, which may be different from the request token (!) 
            cb.setToken(reply.oauth_token, reply.oauth_token_secret);
            console.log(reply)
            twitterToken = reply.oauth_token;
            twitterSecret = reply.oauth_token_secret;
            var twitter_login_button = document.getElementById('twitterLoginButton');
            twitter_login_button.style.display = "none";
            var twitter_input = document.getElementById('PINFIELD');
            twitter_input.style.display = "none";
            var twitter_submit_button = document.getElementById('submitButton');
            twitter_submit_button.style.display = "none";
            // if you need to persist the login after page reload, 
            // consider storing the token in a cookie or HTML5 local storage 
        }
    );
}
