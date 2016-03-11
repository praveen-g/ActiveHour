var instagram_access_token= "";

function getAccessToken(){
	console.log(document.URL);
	var exp="/token="
	instagram_access_token = document.URL.match(exp)
	console.log(instagram_access_token)
	instagram_access_token=instagram_access_token.substring(7)
};