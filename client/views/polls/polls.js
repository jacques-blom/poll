
Template.polls.helpers({

	polls: function () {
		
		return Polls.find({}, {
			sort: {
				inserted: -1
			}
		});

	},

	answersCount: function () {
	
		var answers = Polls.findOne(this._id).answers;
		if(typeof answers == "undefined") return;

		var totalAnswers = 0;
		for(option in answers) {
			totalAnswers += answers[option];
		}

		return totalAnswers;

	},

	votesText: function () {

		var answers = Polls.findOne(this._id).answers;
		if(typeof answers == "undefined") return;

		var totalAnswers = 0;
		for(option in answers) {
			totalAnswers += answers[option];
		}
		
		if(totalAnswers == 1) {
			return "vote";
		}

		return "votes";

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

		}

		return Math.round(currentOptionCount / answersCount * 100);

	},

	chosenOption: function (option) {
		
		option = parseInt(option);
		var poll = this._id;

		var user = Meteor.user();
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

	}

});

Template.polls.events({

	"click .rate": function (e) {
		
		var option = parseInt($(e.currentTarget).attr("data-option"));

		Meteor.call("rate", this._id, option);

	}

});
