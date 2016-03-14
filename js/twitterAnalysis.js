

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

	cb.__call(
		"friends_ids",
		{},
		function (reply,rate, err){
			friends = reply.ids;
			var friend_id
			var common_friends_length=[];
			var common_friends=[]
			var friends=[]
			var friends_of_friends=[]


			for(i=0; i<10; i++){
				cb.__call(
					"friends_ids",
					{
						"user_id": friends[i]
					},
					function (reply,rate, err){

						friends_of_friends.push(reply.ids);

						common_friends.push(intersect(friends,reply.ids));

						for(i=0;i<common_friends.length;i++){
							common_friends_length.push(common_friends[i].length);
						}

						var index= common_friends_length.indexOf(Math.max.apply(Math, common_friends_length));
						friend_id=friends[index]
						console.log(friend_id[index])
						accounts_of_interest = common_friends[index]-friends
						console.log(common_friends[index])
						console.log("-------")

						// var a = [], diff = [];

					 //    for (var i = 0; i < friends.length; i++) {
					 //        a[friends[i]] = true;
					 //    }

					 //    for (var i = 0; i < common_friends[index].length; i++) {
					 //        if (a[common_friends[index][i]]) {
					 //            delete a[common_friends[index][i]];
					 //        } else {
					 //            a[common_friends[index][i]] = true;
					 //        }
					 //    }

					 //    for (var k in a) {
					 //        diff.push(k);
					 //    }

					 //    console.log(diff)
					}
				);
				
			};
		}
	);
}
