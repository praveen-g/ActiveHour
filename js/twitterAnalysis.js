var tweets=[]
var twitterDict=[]

function countLols(){
  for (var t=0;t<tweets.length;t++){

    var tweetText= tweets[t]

    if(tweetText){

      var obj3={
        "text":tweetText, "time": t["created_at"]
      }
      twitterDict= twitterDict.concat(obj3)
    }   
  }
}

function twitterAnalysis(){
  
  cb.__call(
      "statuses_userTimeline",
      {"count": 180},
      function (result) {

          tweets=result
          twitterMessages= countLols();
      }
  );
  return twitterDict
}
