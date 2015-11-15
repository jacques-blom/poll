
Meteor.publish("polls", function () {

	return Polls.find({}, {
		fields: {
			answers: false
		}
	});

});

// Create another publication called "votedPolls"
	// Which now returns polls WITH the "answers" field,
	// only for Polls on which a user has voted