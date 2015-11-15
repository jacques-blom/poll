
Meteor.methods({

	rate: function (poll, option) {

		// Throw an error if the user is not logged in

		check(poll, String);
		check(option, Number);

		// Find a Poll (assign it to pollObj) where the id is "poll" and the user has answered

		if(pollObj) {
			return;
		}

		// 1. Add an object to the Poll's "answers" field,
			// containing the user's ID and the option they selected
		
		// 2. Increment "answersCount" by 1

	}

});