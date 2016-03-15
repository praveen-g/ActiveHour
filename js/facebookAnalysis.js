// FB.api(path, method, params, callback)
var posts= []
var comments = []
var FacebookLOL = 0
var url=[]



function countLOLs(){

	console.log(6)
	for (k =0; k<posts.length; k++){

		var str1 =posts[k]["message"]

		if (str1!=null){

			str1=str1.toLowerCase()
			if ( str1.indexOf("lol") >-1 || str1.indexOf("haha")>-1){

				FacebookLOL++
			}
		}
	}
	for (l =0; l<comments.length; l++){

		var str2 =comments[l]["data"]["message"]
		console.log(str2)

		if (str2!=null){

			str2=str2.toLowerCase()

			if ( str.indexOf("lol") >-1 || str.indexOf("haha")>-1){
				FacebookLOL++
			}

		}
	}
}

function commentAPICall(val){

	fb.api(val, function(response){
		console.log(5.5)
		if (response && !response.error) {
	        console.log(response)
	        comment=response.data
	      }
	    return  comment
	});
}

function getComments(){
	console.log(5)

	for(j=0;j<url.length;j++){

		comments=comments.concat(commentAPICall(url[j]))
		
	}

}

function formUrls(){
	console.log(4)
	for(m=0;m<posts.length;m++){
		var str="/"+posts[m]["id"]+"/comments?redirect=0"
		url=url.concat(str)
	}
}


function getPost(nextpage){
	console.log(3)
	FB.api(nextpage, function(response){
    	posts=posts.concat(response.data);
    	
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
	        posts=posts.concat(response.data)
	      	var i =0
	      	while(i < 2){
            	nextpage = response.paging.next;
            	getPost(nextpage)
            	i++;
    		}
    		formUrls();
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