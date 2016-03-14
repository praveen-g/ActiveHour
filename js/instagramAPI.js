var instagram_access_token= "";

function changeURL(){

	document.location="https://api.instagram.com/oauth/authorize/?client_id=e98ee3c6563a4c548e689fb10276e81c&redirect_uri=http://praveen-g.github.io/ActiveHour/&response_type=token";
};

function removeButton(){
	var instagram_login_button = document.getElementById('instagramLoginButton');
    instagram_login_button.style.display = "none";
}

function getAccessToken(){

	console.log(document.location.hash);
	
	instagram_access_token = document.location.hash
	console.log(instagram_access_token);
	removeButton()
}
window.onload = getAccessToken();

