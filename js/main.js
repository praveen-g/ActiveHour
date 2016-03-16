
function startAnalysing(){
	var facebookMessages = facebookAnalysis();
	var twitterMessges = twitterAnalysis();
    //var insta = instagramAnalysis();
    console.log(facebookMessages.length)
    console.log(twitterMessges.length)
}