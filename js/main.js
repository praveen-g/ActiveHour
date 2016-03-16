var mainDict=[]
var sentimentScores = []
var sentiment


function createDict(){
    console.log("in createDict")
    mainDict.forEach(function(obj,index){
        var messageScore = analyze(obj["text"])
        sentimentScores= sentimentScores.concat({"sentiment": messageScore, "time": obj["time"]})
    })

}

function getDict(){

   mainDict=twitterDict.concat(FacebookDict);
   createDict()

}

function startAnalysing(){
    console.log("in analyze")
    var facebook= facebookAnalysis();
    var twitter= twitterAnalysis();
    getDict();

}