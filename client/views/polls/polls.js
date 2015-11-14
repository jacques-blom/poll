
Template.polls.helpers({

	polls: function () {
		
		return Polls.find({}, {
			sort: {
				inserted: -1
			}
		});

	},

	optionPercentage: function (option) {
		
		option = parseInt(option);

		var poll = Polls.findOne(this._id);
		if(!poll) return;
		if(!poll.answers) return;

		var currentOptionCount = 0;

		for (var i = 0; i < poll.answers.length; i++) {
			if(poll.answers[i].option == option) {
				currentOptionCount++;
			}
		};

		return Math.round(currentOptionCount / poll.answers.length * 100);

	},

	chosenOption: function (option) {
		
		option = parseInt(option);
		user = Meteor.userId();

		var poll = Polls.findOne(this._id);
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

	}

});

Template.polls.events({

	"click .rate": function (e) {
		
		var option = parseInt($(e.currentTarget).attr("data-option"));

		Meteor.call("rate", this._id, option);

	}

})