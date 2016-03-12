function login(network){
	// Twitter instance
	var twitter = hello(network);
	// Login
	twitter.login().then( function(r){
		// Get Profile
		return twitter.api('me');
	}, log )
	.then( function(p){
		// Put in page
		document.getElementById('login').innerHTML = "<img src='"+ p.thumbnail + "' width=24/>Connected to "+ network+" as " + p.name;
	}, log );
}

hello.init({
	'twitter' : "plUf1tbImpjYtMeD20bg8xdzh"
},
{
	redirect_uri:'http://praveen-g.github.io/ActiveHour/',
	oauth_proxy: 'http://praveen-g.github.io/ActiveHour/'
});