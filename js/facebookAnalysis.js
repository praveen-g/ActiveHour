// FB.api(path, method, params, callback)
var posts= []
var comments = []
var FacebookLOL = 0
var url=[]
var facebookMessages=[]

var id=""

function createDict(){
	i=0
	for (k =0; k<posts.length; k++){
		
		var str1 =posts[k]["message"]

		if (str1!=null){
		console.log(i++)
			 var obj = {
			 	"text":str1, "time": posts[k]["created_time"]
			 }
			 facebookMessages.push(obj)
		}
	}
	console.log(facebookMessages.length)

	for (l =0; l<comments.length; l++){
		
		var str2 =comments[l]["message"]

		if (str2!=null){
			var obj1 = {
			 	"text":str2, "time": comments[l]["created_time"]
			 }
			 facebookMessages.push(obj1)
		}
	}
	console.log(facebookMessages.length)
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
    		createDict();
		}
	});
	return 2
}
