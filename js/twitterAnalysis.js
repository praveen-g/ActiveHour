var tweets=[]
var TwitterLOL=0

function countLOLs(k){

    var str3 =tweets[k]["text"]
    console.log(str3)

    if (str3!=null){

      str3=str3.toLowerCase()
      if ( str3.indexOf("lol") >-1 || str3.indexOf("haha")>-1){
        TwitterLOL++
      }
    }
    return TwitterLOL
}

function twitterAnalysis(){
  console.log(1)
  cb.__call(
      "statuses_userTimeline",
      {"count": 180},
      function (result) {

          tweets=result
          for (k =0; k<tweets.length; k++){ 
            TwitterLOL= countLOLs(k);
        }
      }
  );
  
}
