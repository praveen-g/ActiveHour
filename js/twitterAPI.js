var twitter_access_token="":

function getTwitterAccessToken(){
	var xmlhttp = new XMLHttpRequest();
	var method = "POST";
	var url= "https://api.twitter.com/oauth/request_token";
	var data= {
		"consumerKey": "plUf1tbImpjYtMeD20bg8xdzh",
		"consumerSecret": "u7FJ1J1UGjhI3nmTeA87EonkfhnuxI5Ntt55KN62apDHIy3O6R"
	}
	xmlhttp.open(method,url);

}


var xhttp = new XMLHttpRequest();
xhttp.open("POST", "https://api.twitter.com/oauth/request_token", true);

var params= {"OAuth oauth_consumer_key="plUf1tbImpjYtMeD20bg8xdzh", oauth_nonce="09610640c8baa09f95f59a0743f49b92", oauth_signature="UBkC6M5F%2BKvQOTM59KuEzs5CYf0%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1457758896", oauth_version="1.0"

xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");
Try it yourself »
