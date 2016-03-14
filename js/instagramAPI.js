var instagram_access_token= "";
var flag=false;

function changeURL(){

	document.location="https://api.instagram.com/oauth/authorize/?client_id=e98ee3c6563a4c548e689fb10276e81c&redirect_uri=http://praveen-g.github.io/ActiveHour/&response_type=token";
};

function getAccessToken(){

	console.log(document.location.hash);
	
	instagram_access_token = document.location.hash
	console.log(instagram_access_token);
	flag=true;
}
window.onload = getAccessToken();

