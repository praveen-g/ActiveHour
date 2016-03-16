var mainDict=[]
var sentimentScores = []
var sentiment


function createDict(){

    mainDict.forEach(function(obj,index){
        var messageScore = analyze(obj["text"])
        sentimentScores= sentimentScores.concat({"sentiment": messageScore, "time": obj["time"]})
    })

}

function getDict(){
    console.log("in dict")
   console.log(FacebookDict)
   console.log(twitterDict)
   mainDict=twitterDict.concat(FacebookDict);
   createDict()

}

function startAnalysing(){
    console.log("in analyze")
    facebookAnalysis();
    twitterAnalysis();

}