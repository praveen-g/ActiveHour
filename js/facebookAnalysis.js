// FB.api(path, method, params, callback)

function facebookAnalysis(){
	fb.api("me/friends", function(response){
		if (response && !response.error) {
	        console.log(response)
	      }
	})
};