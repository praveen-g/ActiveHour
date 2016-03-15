var tweets=[]
var TwitterLOL=0

function countLols(){
  console.log("I'm being called")
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
