var tweets=[]
var TwitterLOL=0

function countLols(){

  for (var k=0; k<tweets.length; k++){
    var tweetText = tweets[k]["text"]
  }
}

function twitterAnalysis(){
  console.log(1)
  cb.__call(
      "statuses_userTimeline",
      {"count": 180},
      function (result) {

          tweets=result
          countLols();
      }
  );
  
}
