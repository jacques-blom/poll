
Meteor.publish("userAnswered", function () {
	
	return Meteor.users.find({
		_id: this.userId
	}, {
		fields: {
			answered: 1
		}
	});

});

Meteor.publish("polls", function () {

	return Polls.find({}, {
		fields: {
			answers: false
		}
	});

});

// Create another publication called "votedPolls"
	// Which now returns polls in the user's "answered list