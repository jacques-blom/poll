
Meteor.methods({

	rate: function (poll, option) {

		if(!this.userId) {
			return;
		}

		check(poll, String);
		check(option, Number);

		var answered = Meteor.users.findOne({
			_id: this.userId,
			"answered.poll": poll
		});

		if(answered) {
			return;
		}

		Polls.update(poll, {
			$inc: {
				["answers." + option]: 1
			}
		});

		Meteor.users.update(this.userId, {
			$push: {
				answered: {
					poll: poll,
					option: option
				}
			}
		});

	}

});