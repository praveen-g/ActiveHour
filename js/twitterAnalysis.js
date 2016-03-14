var friends=[]
var common_friends=[]
var index
var friends_of_friends=[]

function intersect(array1, array2) {
	console.log(4)
   var result = [];
   // Don't destroy the original arrays
   var a = array1.slice(0);
   var b = array2.slice(0);
   var aLast = a.length - 1;
   var bLast = b.length - 1;
   while (aLast >= 0 && bLast >= 0) {
      if (a[aLast] > b[bLast] ) {
         a.pop();
         aLast--;
      } else if (a[aLast] < b[bLast] ){
         b.pop();
         bLast--;
      } else /* they're equal */ {
         result.push(a.pop());
         b.pop();
         aLast--;
         bLast--;
      }
   }
   return result;
}
function computeDiff(){
	var a = [], diff = [];
	for (var i = 0; i < friends.length; i++) {
        a[friends[i]] = true;
    }

    for (var i = 0; i < friends_of_friends[index].length; i++) {
        if (a[friends_of_friends[index][i]]) {
            delete a[friends_of_friends[index][i]];
        } else {
            a[friends_of_friends[index][i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    console.log( diff);
}

function findFriends(){
	console.log(3)

	for(i=0; i<10; i++){

		cb.__call(
			"friends_ids",
			{
				"user_id": friends[i]
			},
			function (reply,rate, err){

				var common_friends_length=[]

				friends_of_friends.push(reply.ids);

				common_friends.push(intersect(friends,reply.ids));

				for(i=0;i<common_friends.length;i++){
					console.log(5)
					common_friends_length.push(common_friends[i].length);
				}
				console.log(common_friends)

				index= common_friends_length.indexOf(Math.max.apply(Math, common_friends_length));

				console.log(friends[index])
				console.log(friends_of_friends[index])
							
			}
		);
	}
}

function twitterAnalysis(){

	console.log(2)
	cb.__call(
		"friends_ids",
		{},
		function (reply,rate, err){
			friends = reply.ids;
			findFriends();
			computeDiff()
		}
	);
}
