var mainDict=[]
var sentimentScores = []
var sentiment

// if (typeof define !== 'function') { var define = require('amdefine')(module) }
// define( function(require){
//     sentiment = require('sentiment');
// })



function sentimentAnalysis(socialObject){
    console.log(socialObject)
    // require(['sentiment'], function (sentiment) {
    var messageScore   = analyze(socialObject["text"])
    // });

    return sentimentAndTime = {
        "sentiment": messageScore, "time": socialObject["time"]
    }
}

function createDict(facebookMessages,twitterMessges){

    for (var i = 0; i<facebookMessages.length; i++) {

        sentimentScores = sentimentScores.concat(sentimentAnalysis(mainDict[i]))
    };
    return sentimentScores
}

function startAnalysing(){
	var facebookMessages = facebookAnalysis();
	var twitterMessges = twitterAnalysis();
    //var insta = instagramAnalysis();
    
    var scores = createDict(facebookMessages,twitterMessges)

    console.log(scores)
}