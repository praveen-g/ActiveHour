// FB.api(path, method, params, callback)

function facebookAnalysis(){

	fb.api("/me", function(response){
		if (response && !response.error) {
	        console.log(response)
	      }
	})	

	fb.api("/me/posts", function(response){
		if (response && !response.error) {
	        console.log(response)
	      }
	})

	fb.api("/me/photos", function(response){
		if (response && !response.error) {
	        console.log(response)
	      }
	})
};