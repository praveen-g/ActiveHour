instagram_access_token

function getUserID(){
    $.get("https://api.instagram.com/v1/users/self/?access_token="+instagram_access_token, function(response){
        console.log(response)
    });
}

function instagramAnalysis(){
    getUserID();
    // getPhotos();
}