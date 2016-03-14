function twitterAnalysis(){
	friends=[]
	friends_of_friends=[]

	console.log("1")

	cb.__call(
		"friends_ids",
		{},
		function (reply,rate, err){
			friends = reply.ids;
			console.log(friends)

			for(i=0; i<friends.length; i++){
				cb.__call(
					"friends_ids",
					{
						"user_id": friends[i]
					},
					function (reply,rate, err){

						friends_of_friends.push(reply.ids);
						console.log(friends_of_friends)
					}
				);
				
			};
		}
	);
	console.log("2")
}