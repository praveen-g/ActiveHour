// FB.api(path, method, params, callback)

function facebookAnalysis(){
	fb.api("me/friendlists", function(response){
		if (response && !response.error) {
	        console.log(response)
	      }
	})
};