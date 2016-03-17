var instagram_access_token= "";

function changeURL(){

	document.location="https://api.instagram.com/oauth/authorize/?client_id=e98ee3c6563a4c548e689fb10276e81c&redirect_uri=http://praveen-g.github.io/ActiveHour/&response_type=token";
};

function getAccessToken(){

	console.log(document.location.hash);
	
	instagram_access_token = document.location.hash
    instagram_access_token = instagram_access_token.split("=").pop();
    console.log(instagram_access_token);
	flag=true;

	$.ajax({
    	type: 'GET',
    	dataType: "jsonp",
    	url: "https://api.instagram.com/v1/users/self/?access_token="+instagram_access_token,
    	success: function(response){
    		console.log(response)
            if (response && !response.error) {
        		// var instagram_login_button = document.getElementById('instagramLoginButton');
          //       instagram_login_button.style.display = "none";
            }
    	}

    });
}
window.onload = getAccessToken();

