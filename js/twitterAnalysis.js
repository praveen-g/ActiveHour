function twitterAnalysis(){
	friends=[]
	friends_of_friends=[]

	console.log("TWIERGRER#QHEQTH")

	cb.__call(
		"friends_ids",
		{},
		function (reply,rate, err){
			friends = reply.ids;
		}
	);
	console.log("FML")
	for(i=0; i<friends.length; i++){

		getFriendsOfFriends();
		
	};

}

function getFriendsOfFriends(){

	cb.__call(
			"friends_ids",
			{
				"user_id": friends[i]
			},
			function (reply,rate, err){

				friends_of_friends.append(reply.ids);
				console.log(friends_of_friends)
			}
		);
}