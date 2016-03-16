var mainDict=[]
var sentimentScores = []
var sentiment
var grouping=[]

function createDict(){

    mainDict.forEach(function(obj,index){
        console.log("loop")
        var messageScore = analyze(obj["text"])
        sentimentScores= sentimentScores.concat({"sentiment": messageScore, "time": obj["time"]})
    })
    
    sentimentScores.forEach(function(obj,index){
      var str=obj["time"][0]+obj["time"][1]
      if(!grouping[str]){
        grouping[str]=[]
      }
      else{
        grouping[str]=grouping[str].concat(obj["sentiment"])
      }
    })

}

function getDict(){

   mainDict=(twitterDict.reverse()).concat(FacebookDict);
   createDict()

}

function startAnalysing(){
    console.log("in analyze")
    facebook= facebookAnalysis();
    twitter= twitterAnalysis();
}