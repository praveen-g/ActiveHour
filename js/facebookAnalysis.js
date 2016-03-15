// FB.api(path, method, params, callback)
var posts_data = []
var posts_id = []
var comments = []
var FacebookLOL = 0

function getComments(){
	console.log(4)
	for(i=0;i<posts_id.length;i++){

		fb.api("/"+posts_id[i]+"/comments", function(response){
			if (response && !response.error) {
		        comments.concat(response.message)
		      }
		})
	}

}


function countLOLs(){
	console.log(5)
	for (i =0; i<posts_data.length; i++){
		var str =posts_data[i].toLowerCase()
		if ( str.indexOf("lol") >-1 || str.indexOf("haha")>-1){
			FacebookLOL++
		}

	}
	for (i =0; i<comments.length; i++){
		var str =comments[i].toLowerCase()
		if ( str.indexOf("lol") >-1 || str.indexOf("haha")>-1){
			FacebookLOL++
		}

	}


}

function getPost(nextpage){
	console.log(3)
	FB.api(nextpage, function(response){
		console.log(3)
		console.log(response)
    	posts_id = posts_id.concat(response.data.id);
    	posts_data = posts_data.concat(response.data.story);
	});
            	
}




function facebookAnalysis(){

	fb.api("/me", function(response){
		console.log(1)
		if (response && !response.error) {
	        console.log(response)
	      }
	})	

	fb.api("/me/feed", function(response){
		console.log(2)

		if (response && !response.error) {
	        //console.log(response)
	        posts_data=response.data.story
	        posts_id=response.data.id
	      	var i =0
	      	while(i < 2){
            	nextpage = response.paging.next;
            	getPost(nextpage)
            	i++;
    		}
    		getComments();
    		countLOLs();
		}
	});
}


	// fb.api("/me/posts", function(response){
	// 	if (response && !response.error) {
	//         console.log(response)
	//       }
	// })

	// fb.api("/me/photos", function(response){
	// 	if (response && !response.error) {
	//         console.log(response)
	//       }
	// })
//};