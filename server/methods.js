
Meteor.methods({

	rate: function (poll, option) {

		if(!this.userId) {
			return;
		}

		check(poll, String);
		check(option, Number);

		var pollObj = Polls.findOne({
			_id: poll,
			"answers.user": this.userId
		});

		if(pollObj) {
			return;
		}

		Polls.update(poll, {
			$push: {
				answers: {
					user: this.userId,
					option: option
				}
			},
			$inc: {
				answersCount: 1
			}
		});

	}

});