

function getUserID(){
	instagram_access_token = instagram_access_token.
    $.get(("https://api.instagram.com/v1/users/self/?access_token="+instagram_access_token), function(response){
        console.log(response)
        var instagram_login_button = document.getElementById('instagramLoginButton');
        instagram_login_button.style.display = "none";
    });
}

function instagramAnalysis(){
    getUserID();
    // getPhotos();
    return 3

}