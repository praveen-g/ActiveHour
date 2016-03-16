// FB.api(path, method, params, callback)
var posts= []
var comments = []
var url=[]
var FacebookDict=[]
var postsDict=[]
var commentsDict=[]

// function createCommentsDictionary(){
// 	 console.log(comments.length)

// 	for (var c =0;c<comments.length;c++){
// 		console.log(c)


// 		if (comments[c]["message"]){

// 			 var obj2 = {
// 			 	"text":comments[c]["message"], "time": comments[c]["created_time"]
// 			 }
// 			 FacebookDict=FacebookDict.concat(obj2)
// 		} 
// 	}
// 	return true
// }


function createPostsDictionary(){
	console.log(posts.length)

	for (var p=0;p<posts.length;p++){
		console.log(p)

		if (posts[p]["message"]){
			// splitting the time for Facebook posts, posts[p]["created_time"] is a list in format ["yyyy","mm","dd"]
			posts[p]["created_time"] = posts[p]["created_time"].replace(/T.*/,"")
			posts[p]["created_time"] = posts[p]["created_time"].split("-")
			switch (posts[p]["created_time"])
			{
				case "01":
					posts[p]["created_time"] = "Jan"
					break
				case "02":
					posts[p]["created_time"] = "Feb"
					break
				case "03":
					posts[p]["created_time"] = "Mar"
					break
				case "04":
					posts[p]["created_time"] = "Apr"
					break
				case "05":
					posts[p]["created_time"] = "May"
					break
				case "06":
					posts[p]["created_time"] = "Jun"
					break
				case "07":
					posts[p]["created_time"] = "Jul"
					break
				case "08":
					posts[p]["created_time"] = "Aug"
					break
				case "09":
					posts[p]["created_time"] = "Sep"
					break
				case "10":
					posts[p]["created_time"] = "Oct"
					break
				case "11":
					posts[p]["created_time"] = "Nov"
					break
				case "12":
					posts[p]["created_time"] = "Dec"
					break

			}
			 var obj = {
			 	"text":posts[p]["message"], "time": posts[p]["created_time"]
			 }

			 console.log(obj)
			 FacebookDict=FacebookDict.concat(obj)
		}
	}
	console.log(FacebookDict)
	//var commentsDictionaryCall = createCommentsDictionary()
	return true
}

// function commentAPICall(val){

// 	fb.api(val, function(response){
// 		if (response && !response.error) {
// 	        comments=comments.concat(response["data"])
// 	      }
	    
// 	});
// 	return  1
// }

// function getComments(){
// 	console.log(url.length)
// 	for(j=0;j<url.length;j++){
// 		var arr = commentAPICall(url[j])
// 	}
// 	return true

// }

// function formUrls(){
// 	console.log(this.posts.length)
// 	for(m=0;m<this.posts.length;m++){
// 		var str="/"+this.posts[m]["id"]+"/comments?redirect=0"
// 		url=url.concat(str)
// 	}
// 	return true
// }

// function getPosts(nextPage){
// 	console.log("im getting called")
// 	FB.api(nextPage, function(response){
// 		this.posts=posts.concat(response.data);
		
// 	});

// }

function facebookAnalysis(){

	fb.api("/me/feed", function(response){
		if (response && !response.error) {

	        this.posts=posts.concat(response.data)
	        console.log(response)
	        //var getposts = getPosts(response.nextpage)
	        //var url = formUrls()
			//var comments=getComments();
			var postsDict = createPostsDictionary();
			
	     }
	});
}