var media = []
var iterate=8;


function makeCall(id){


    $.ajax({
    	type: 'GET',
    	dataType: "jsonp",
    	url: "https://api.instagram.com/v1/users/self/media/recent/?access_token="+instagram_access_token+"&min_id="+id,
    	success: function(response2){

    		if(data!= [] && iterate>0){

    			media.concat(response2["data"])
    			if(response2["data"].length==20){
    				makeCall(response2["data"][19]["id"])
    			}
    		}
    	}

    });
}

function getUserID(){
	
    // $.get(("https://api.instagram.com/v1/users/self/?access_token="+instagram_access_token), function(response){
    //     console.log(response)
    //     var instagram_login_button = document.getElementById('instagramLoginButton');
    //     instagram_login_button.style.display = "none";
    // });

    $.ajax({
    	type: 'GET',
    	dataType: "jsonp",
    	url: "https://api.instagram.com/v1/users/self/media/recent/?access_token="+instagram_access_token+"&count=160",
    	success: function(response){
    		media=media.concat(response["data"])
    		if(response["data"].length==20){
    			makeCall(response["data"][19]["id"])
    		}
    	}

    });
}

function instagramAnalysis(){
    getUserID();
    return 3

}