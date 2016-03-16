var tweets=[]
var twitterDict=[]

function countLols(){
  for (var t=0;t<tweets.length;t++){
    
    var tweetText= tweets[t]
    console.log(tweetText)
    if(tweetText["text"]){
      // splitting date element from Twitter
      // tweetText["created_at"] is in format ["Day","Mmm","dd","hh:mm:ss","xxxxx","yyyy"]
      // we pop the elements and save it in tweetDate in format ["yyyy","mm","dd"]
      tweetText["created_at"] = tweetText["created_at"].split(" ")
      var tweetDate = []
      tweetDate = tweetDate.concat(tweetText["created_at"][5],tweetText["created_at"][1],tweetText["created_at"][2])
      var obj3={
        "text":tweetText["text"], "time": tweetDate
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
