// FB.api(path, method, params, callback)

function facebookAnalysis(){
	Fb.api("me/friendlists", function(response){
		if (response && !response.error) {
	        console.log(response)
	      }
	})
};