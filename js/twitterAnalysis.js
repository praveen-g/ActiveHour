

function intersect(array1, array2) {
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

function twitterAnalysis(){
	friends=[]
	friends_of_friends=[]
	common_friends=[]

	console.log("1")

	cb.__call(
		"friends_ids",
		{},
		function (reply,rate, err){
			friends = reply.ids;
			console.log(friends);

			for(i=0; i<10; i++){
				cb.__call(
					"friends_ids",
					{
						"user_id": friends[i]
					},
					function (reply,rate, err){
						friends_of_friends.push(reply.ids);
						common_friends.push(intersect(friends,reply.ids));
					}
				);
				
			};
			common_friends_length=[];
			for(i=0;i<common_friends.length;i++){
				common_friends_length.push(common_friends[i].length);
				console.log(common_friends_length)
			}
			var index= common_friends_length.indexOf(Math.max.apply(Math, common_friends_length));
			console.log(index)
			friend_id=friends[index]
			console.log(friend_id)
			accounts_of_interest = common_friends[i]-friends
			console.log(accounts_of_interest)

		}
	);
}


