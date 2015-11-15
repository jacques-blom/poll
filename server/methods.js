
Meteor.methods({

	rate: function (poll, option) {

		// Throw an error if the user is not logged in

		check(poll, String);
		check(option, Number);

		// Find the user (assign it to answered)
		// where they have answered this poll
		// (so the answered field will contain an object with a poll key equal to the id of the current poll)

		// Throw an error if the user has answered the poll

		// Increment "answers.option" by 1 - (option being the option number they selected)

		// Add an object to the current user's "answered" field,
			// containing the poll's ID and the option they selected

	}

});