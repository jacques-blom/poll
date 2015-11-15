
Template.polls.helpers({

	// Create a helper called "polls" and find all polls
		// Sort them by date inserted (so that the latest one is returned first)
	answersCount: function () {
	
		// Find the current poll
		// Assign its ".answers" to the answers variable
		// And return 0 the function if the attribute doesn't exist

		var totalAnswers = 0;
		for(option in answers) {
			totalAnswers += answers[option];
		}

		return totalAnswers;

	},

	votesText: function () {

		// Do the same here as you did in the above helper

		var totalAnswers = 0;
		for(option in answers) {
			totalAnswers += answers[option];
		}
		
		if(totalAnswers == 1) {
			return "vote";
		}

		return "votes";

	},

	chosenOption: function (option) {
		
		option = parseInt(option);
		// Assign the poll's id to the "poll" variable

		// Get the current user and store them in the user variable
		if(!user) return;
		if(typeof user.answered == "undefined") return;

		var chosenOption = false;
		for (var i = 0; i < user.answered.length; i++) {
			if(user.answered[i].poll == poll) {
				if(user.answered[i].option == option) {
					chosenOption = true;
					break;
				}
			}
		};

		return chosenOption;

	},

	optionPercentage: function (option) {
		
		option = parseInt(option);

		var poll = Polls.findOne(this._id);
		if(!poll) return;
		if(!poll.answers) return;

		if($.isEmptyObject(poll.answers)) return 0;

		var currentOptionCount = 0;
		var answersCount = 0;

		for(currentOption in poll.answers) {
			
			answersCount += poll.answers[currentOption];

			if(currentOption == option) {
				currentOptionCount += poll.answers[currentOption];

		}

		return Math.round(currentOptionCount / answersCount * 100);

	}

});

Template.polls.events({

	"click .rate": function (e) {
		
		var option = parseInt($(e.currentTarget).attr("data-option"));

		// Call the "rate" method, with the id of the Poll as the 1st argument, and the option as the 2nd

	}

});
