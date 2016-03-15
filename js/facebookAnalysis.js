// FB.api(path, method, params, callback)
var posts= []
var comments = []
var FacebookLOL = 0

function getComments(){
	console.log(4)
	for(i=0;i<posts.length;i++){
		var url = "/"+posts[i]["id"]+"/comments"
		fb.api(url, function(response){
			console.log(response)

			if (response && !response.error) {
				console.log(response)
		        comments=comments.concat(response)
		      }
		})
	}

}


function countLOLs(){
	console.log(5)
	for (i =0; i<posts.length; i++){

		var str1 =posts[i]["story"]

		if (str1!=null){

			str1=str1.toLowerCase()
			if ( str1.indexOf("lol") >-1 || str1.indexOf("haha")>-1){

				FacebookLOL++
			}
		}
	}
	for (i =0; i<comments.length; i++){

		var str2 =comments[i]["data"]["message"]

		if (str2!=null){

			str2=str2.toLowerCase()
			
			if ( str.indexOf("lol") >-1 || str.indexOf("haha")>-1){
				FacebookLOL++
			}

		}
	}
}


function getPost(nextpage){
	console.log(3)
	FB.api(nextpage, function(response){
		console.log(3)
		console.log(response)
    	posts=posts.concat(response.data.id);
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
	        posts=posts.concat(response.data)
	      	var i =0
	      	while(i < 2){
            	nextpage = response.paging.next;
            	getPost(nextpage)
            	i++;
    		}
    		// getComments();
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