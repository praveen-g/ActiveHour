var tweets=[]
var twitterMessages=[]

function countLols(){
  for (var k=0; k<tweets.length; k++){

    var tweetText= tweets[k]["text"]

    if(tweetText!=""){


      var obj={
        "text":tweetText, "time": tweets[k]["created_at"]
      }
      twitterMessages= twitterMessages.concat(obj)
    }   
  }
}

function twitterAnalysis(){
  
  console.log(8)
  cb.__call(
      "statuses_userTimeline",
      {"count": 180},
      function (result) {

          tweets=result
          twitterMessages= countLols();
      }
  );
}
