var mainDict=[]
var sentimentScores = []
var sentiment
var facebookMessages=[]
var twitterMessges=[]
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

        sentimentScores = sentimentScores.push(sentimentAnalysis(mainDict[i]))
    }
}

function getDict(){
    facebookMessages = facebookAnalysis();
    twitterMessges = twitterAnalysis();

}

function startAnalysing(){

    getDict();
    //var insta = instagramAnalysis();
    createDict(facebookMessages,twitterMessges)

}