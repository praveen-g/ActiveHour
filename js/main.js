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

function createDict(facebookMessages,twitterMessges){

    for (var i = 0; i<facebookMessages.length; i++) {

        sentimentScores = sentimentScores.push(sentimentAnalysis(mainDict[i]))
    }
}

function getDict(){
    facebookMessages = facebookAnalysis();
    twitterMessages = twitterAnalysis();

}

function startAnalysing(){
    facebookAnalysis();
    var urlCall = formUrls();
    var commentCall= getComments();
    var postCall=createPostsDictionary();
    twitterAnalysis();
    // getDict();
    // //var insta = instagramAnalysis();
    // createDict(facebookMessages,twitterMessages)

}