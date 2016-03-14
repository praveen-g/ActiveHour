function twitterAnalysis(){

	cb.__call(
		"friends_ids",
		{},
		function (reply,rate, err){
			console.log(reply);
			console.log(err);
		}


	);
}