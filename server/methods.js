
Meteor.methods({

	rate: function (poll, option) {

		if(!this.userId) {
			return;
		}

		check(poll, String);
		check(option, Number);

		var pollObj = Polls.findOne(poll);

		Polls.update(poll, {
			$pull: {
				answers: {
					user: this.userId
				}
			}
		});

		Polls.update(poll, {
			$push: {
				answers: {
					user: this.userId,
					option: option
				}
			}
		});

	}

});