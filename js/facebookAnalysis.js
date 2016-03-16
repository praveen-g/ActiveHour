// FB.api(path, method, params, callback)
var posts= []
var comments = []
var FacebookLOL = 0
var url=[]
var FacebookDict=[]
var postsDict=[]
var commentsDict=[]

var id=""

function createDictionary(){

	for (var p in posts){
		console.log(p)
		
		var str1 =p["message"]

		if (str1!=null){

			 var obj = {
			 	"text":str1, "time": x["created_time"]
			 }
			 FacebookDict=FacebookDict.concat(obj)
		}
	}

	for (var c in comments){
		console.log(c)

		var str2 =c["message"]

		if (str2!=null){

			 var obj2 = {
			 	"text":str2, "time": c["created_time"]
			 }
			 FacebookDict=FacebookDict.concat(obj2)
		} 
	}

}

function commentAPICall(val){

	fb.api(val, function(response){
		if (response && !response.error) {
	        comments=comments.concat(response["data"])
	      }
	    return  1
	});
}

function getComments(){

	for(j=0;j<url.length;j++){
		var arr = commentAPICall(url[j])
	}

}

function formUrls(){

	for(m=0;m<posts.length;m++){
		var str="/"+posts[m]["id"]+"/comments?redirect=0"
		url=url.concat(str)
	}
}


function getPost(nextpage){

	FB.api(nextpage, function(response){
    	posts=posts.concat(response.data);
	});
            	
}




function facebookAnalysis(){
	console.log("here")
	fb.api("/me/feed", function(response){


		if (response && !response.error) {

	        posts=posts.concat(response.data)

	      	var i =0
	      	while(i < 8){

            	nextpage = response.paging.next;
            	getPost(nextpage)
            	i++;
    		}

    		formUrls();
    		getComments();
    		createDictionary()
		}
	});

}
