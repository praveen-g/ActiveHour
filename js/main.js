var mainDict=[]
var sentimentScores = []
var sentiment
window.grouping=[]
var label=[]
var positive=[]
var negative=[]

function arrangeData(){
  console.log(window.grouping)
  window.grouping.forEach(function(obj,index){
    label=label.concat(obj.keys())
    positive=positive.concat(
        var total=0
        $.each(arr,function() {
            if (this>0)
              total += this;
        });        
      )
    negative=negative.concat(
        var total=0
        $.each(arr,function() {
            if (this<0)
              total += this;
        });
      )
  })
}

function createDict(){

    mainDict.forEach(function(obj,index){
        console.log("loop")
        var messageScore = analyze(obj["text"])
        sentimentScores= sentimentScores.concat({"sentiment": messageScore, "time": obj["time"]})

        var time = obj["time"][0]+ obj["time"][1]

        if(window.grouping[time]){
          console.log("entereing with value")
          window.grouping[time]=window.grouping[time].concat(obj["sentiment"])

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