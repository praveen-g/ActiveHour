var insatgram_access_token= "45159655.e98ee3c.84951d360aba46f2a57a365dacbcf88e"
var getAccessToken= function(){
	console.log(document.URL);
	var exp="/token="
	instagram_access_token = document.URL.match(exp)
	console.log(instagram_access_token)
}