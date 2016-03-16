var mainDict=[]
var sentimentScores = []
var sentiment

function sentimentAnalysis(socialObject){
    console.log(socialObject)
    // require(['sentiment'], function (sentiment) {
    var messageScore   = analyze(socialObject["text"])
    // });

    return sentimentAndTime = {
        "sentiment": messageScore, "time": socialObject["time"]
    }
}

function createDict(){

    for (var i = 0; i<twitterDict.length; i++) {

        sentimentScores = sentimentScores.push(sentimentAnalysis(twitterDict[i]))
    }

}

function getDict(){
   console.log(FacebookDict)
   console.log(twitterDict)
}

function startAnalysing(){

    facebookAnalysis();
    twitterAnalysis();

}