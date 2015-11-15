
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
			answers: 0
		}
	});
});

Meteor.publish("votedPolls", function () {

	var userId = this.userId;

	this.autorun(function () {

		var answeredList = Meteor.users.findOne(userId, {
			fields: {
				answered: true
			}
		});

		answeredList = answeredList.answered;

		var answeredArray = [];
		
		if(answeredList) {
			for (var i = 0; i < answeredList.length; i++) {
				answeredArray.push(answeredList[i].poll);
			};
		}

		return Polls.find({
			_id: {
				$in: answeredArray
			}
		});

	});

});
