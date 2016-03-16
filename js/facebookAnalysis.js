// FB.api(path, method, params, callback)
var posts= []
var comments = []
var FacebookLOL = 0
var url=[]
var FacebookDict=[]
var postsDict=[]
var commentsDict=[]

var id=""

function createCommentsDictionary(){
	 console.log(comments.length)

	for (var c =0;c<comments.length;c++){
		console.log(c)


		if (comments[c]["message"]){

			 var obj2 = {
			 	"text":comments[c]["message"], "time": comments[c]["created_time"]
			 }
			 FacebookDict=FacebookDict.concat(obj2)
		} 
	}
	return true
}


function createPostsDictionary(){
	console.log(posts.length)

	for (var p=0;p<posts.length;p++){
		console.log(p)

		if (posts[p]["message"]){

			 var obj = {
			 	"text":posts[p]["message"], "time": posts[p]["created_time"]
			 }

			 console.log(obj)
			 FacebookDict=FacebookDict.concat(obj)
		}
	}

	var commentsDictionaryCall = createCommentsDictionary()
	return true
}

function commentAPICall(val){

	fb.api(val, function(response){
		if (response && !response.error) {
	        comments=comments.concat(response["data"])
	      }
	    
	});
	return  1
}

function getComments(){

	for(j=0;j<url.length;j++){
		var arr = commentAPICall(url[j])
	}
	return true

}

function formUrls(){

	for(m=0;m<posts.length;m++){
		var str="/"+posts[m]["id"]+"/comments?redirect=0"
		url=url.concat(str)
	}
	return true
}

function getPosts(){
	var i =0
      	while(i < 8){

        	nextpage = response.paging.next;
        	FB.api(nextpage, function(response){
		    	posts=posts.concat(response.data);

			});
        	i++;
		}
		return true
}

function facebookAnalysis(){
	console.log("here")
	fb.api("/me/feed", function(response){


		if (response && !response.error) {

	        posts=posts.concat(response.data)
	        var getPages=getPosts()
		}
	});

}
