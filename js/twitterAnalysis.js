var tweets=[]
var TwitterLOL=0

function countLols(){
  console.log(9)
  for (var k=0; k<tweets.length; k++){

    var tweetText= tweets[k]["text"]

    if(tweetText!=""){

      tweetText= tweetText.toLowerCase()
      if(tweetText.indexOf("lol")>-1 || tweetText.indexOf("haha")>-1){

        this.TwitterLOL++
      }
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
          countLols();
      }
  );
  
}
