var posts=[]

function getPosts(nextPage){
	var i =0
	while(i < 8){

		FB.api(nextPage, function(response){
    		posts=posts.concat(response.data);
    		nextPage=response.nextpage
		});
        i++;
    }
}

function facebookAnalysis(){

	fb.api("/me/feed", function(response){
		if (response && !response.error) {

	        posts=posts.concat(response.data)
	        var nextPage=response.nextpage
	        getPosts(nextPage);
	     }
	});

}