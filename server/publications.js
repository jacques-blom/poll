
Meteor.publish("polls", function () {
	return Polls.find({}, {
		fields: {
			answers: 0
		}
	});
});

Meteor.publish("votedPolls", function () {
	return Polls.find({
		"answers.user": this.userId
	});
});