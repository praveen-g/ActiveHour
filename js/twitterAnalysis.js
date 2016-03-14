function twitterAnalysis(){

	cb.__call(
		"friends",
		{},
		function (reply,rate, err){
			console.log(reply);
			console.log(err);
		}


	);
}