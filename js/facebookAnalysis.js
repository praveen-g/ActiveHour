// FB.api(path, method, params, callback)

function facebookAnalysis(){

	fb.api("/me", function(response){
		if (response && !response.error) {
	        console.log(response)
	      }
	})	

	fb.api("/me?fields=games", function(response){
		if (response && !response.error) {
	        console.log(response)
	      }
	})

	fb.api("/me/books", function(response){
		if (response && !response.error) {
	        console.log(response)
	      }
	})


	fb.api("/me/movies", function(response){
		if (response && !response.error) {
	        console.log(response)
	      }
	})

	fb.api("/me/television", function(response){
		if (response && !response.error) {
	        console.log(response)
	      }
	})

	fb.api("/me?fields=likes", function(response){
		if (response && !response.error) {
	        console.log(response)
	      }
	})
};