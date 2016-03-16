var mainDict=[]
var sentimentScores = []
var sentiment


function createDict(){

    mainDict.forEach(function(obj,index){
        var messageScore = analyze(obj.["text"])
        sentimentScores.push({"sentiment": messageScore, "time": socialObject["time"]})
    })

}

function getDict(){
    console.log("in dict")
   console.log(FacebookDict)
   console.log(twitterDict)
   mainDict=FacebookDict.concat(twitterDict);
   createDict()

}

function startAnalysing(){
    console.log("in analyze")
    facebookAnalysis();
    twitterAnalysis();

}