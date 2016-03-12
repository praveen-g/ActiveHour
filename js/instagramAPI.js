var instagram_access_token= "";

function getAccessToken(){
	window.location.href="https://api.instagram.com/oauth/authorize/?client_id= e98ee3c6563a4c548e689fb10276e81c&redirect_uri=http://praveen-g.github.io/ActiveHour/&response_type=token";
	console.log(document.URL);
	var exp="/token=";
	instagram_access_token = document.URL.match(exp);
	console.log(instagram_access_token);
	instagram_access_token=instagram_access_token.substring(7);
}();