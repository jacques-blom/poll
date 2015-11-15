
Template.polls.helpers({

	// Create a helper called "polls" and find all polls
		// Sort them by date inserted (so that the latest one is returned first)

	chosenOption: function (option) {
		
		option = parseInt(option);
		// Assign the user's id to the "user" variable

		// Find the current Poll
		if(!poll) return;
		if(!poll.answers) return;

		var chosenOption = 0;

		for (var i = 0; i < poll.answers.length; i++) {
			if(poll.answers[i].option == option && poll.answers[i].user == user) {
				chosenOption = true;
				break;
			}
		};

		return chosenOption;

	},

	optionPercentage: function (option) {
		
		option = parseInt(option);

		var poll = Polls.findOne(this._id);
		if(!poll) return;
		if(!poll.answers) return;

		if(poll.answers.length == 0) return 0;

		var currentOptionCount = 0;

		for (var i = 0; i < poll.answers.length; i++) {
			if(poll.answers[i].option == option) {
				currentOptionCount++;
			}
		};

		return Math.round(currentOptionCount / poll.answers.length * 100);

	}

});

Template.polls.events({

	"click .rate": function (e) {
		
		var option = parseInt($(e.currentTarget).attr("data-option"));

		// Call the "rate" method, with the id of the Poll as the 1st argument, and the option as the 2nd

	}

});
