var mainDict=[]
var sentimentScores = []
var sentiment
var grouping=[]

function arrangeData(){
  sentimentScores.forEach(function(obj,index){

    var time = obj["time"][0]+ obj["time"][1]

    if(grouping[time]){
      console.log("entereing with value")
      grouping[time]=grouping[time].concat(obj["sentiment"])

    }
    else{
      console.log("entering wihtout value")
      grouping[time]=[]
    }
  })
  
}

function createDict(){

    mainDict.forEach(function(obj,index){
        console.log("loop")
        var messageScore = analyze(obj["text"])
        sentimentScores= sentimentScores.concat({"sentiment": messageScore, "time": obj["time"]})
        
    })

}

function getDict(){

   mainDict=(twitterDict.reverse()).concat(FacebookDict);
   createDict()
   arrangeData()
}

function startAnalysing(){
    console.log("in analyze")
    facebook= facebookAnalysis();
    twitter= twitterAnalysis();
}