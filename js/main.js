var mainDict=[]
var sentimentScores = []
var sentiment
window.grouping=[]
var label=[]
var datapoints=[]

function arrangeData(){
    label=Object.keys(grouping)
    label.forEach(function(arr, index){
      if (grouping[arr].length>0){
        var sum = ((grouping[arr].reduce(function(a, b) { return a + b; }, 0)).toFixed(2))/grouping[arr].length *10
        datapoints = datapoints.concat(sum)
      } 
      else{
        delete label[label.indexOf(arr)]
      }
    });

  document.getElementById("score").innerText = "This month's score is"+datapoints[0]/10;
  console.log(grouping)
  console.log(label)
  console.log(datapoints)
}

function createDict(){

    mainDict.forEach(function(obj,index){
        console.log("loop")
        var messageScore = analyze(obj["text"])
        sentimentScores= sentimentScores.concat({"sentiment": messageScore, "time": obj["time"]})

        var time = obj["time"][0]+ " "+obj["time"][1]

        if(window.grouping[time]){
          console.log("entereing with value")
          window.grouping[time]=window.grouping[time].concat(messageScore)

        }
        else{
          console.log("entering wihtout value")
          window.grouping[time]=[]
        }
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