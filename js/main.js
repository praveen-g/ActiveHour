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
    facebookMessages = facebookAnalysis();
    twitterMessages = twitterAnalysis();

}

function startAnalysing(){

    facebookAnalysis();
    formUrls();
    getComments();
    createPostsDictionary();
    twitterAnalysis();
    createDict()
    // getDict();
    // //var insta = instagramAnalysis();
    // createDict(facebookMessages,twitterMessages)

}