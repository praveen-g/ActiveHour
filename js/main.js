var mainDict=[]
var sentimentScores = []

function startAnalysing(){
	var facebookMessages = facebookAnalysis();
	var twitterMessges = twitterAnalysis();
    //var insta = instagramAnalysis();
    console.log(facebookMessages.length)
    console.log(twitterMessges.length)
    mainDict=facebookMessages+twitterMessges
    for (var i = mainDict.length - 1; i >= 0; i--) {
        sentimentScores = sentimentScores.concat(sentimentAnalysis(mainDict[i]))
    };
}