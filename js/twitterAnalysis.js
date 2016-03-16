var tweets=[]

function countLols(){
  
  var twitterMessages=[]

  console.log(9)
  for (var k=0; k<tweets.length; k++){

    var tweetText= tweets[k]["text"]

    if(tweetText!=""){


      var obj={
        "text":tweetText, "time": tweets[k]["created_at"]
      }
      twitterMessages= twitterMessages.concat(obj)
    }   
  }
  return twitterMessages
}

function twitterAnalysis(){
  var twitterMessages=[]
  console.log(8)
  cb.__call(
      "statuses_userTimeline",
      {"count": 180},
      function (result) {

          tweets=result
          twitterMessages= countLols();
      }
  );
  return twitterMessages
  
}
