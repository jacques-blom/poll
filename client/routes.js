
// Make the 'base' template the layout template

Router.route("/", {
	
	subscriptions: function () {
		// Also subscribe to "votedPolls" here
		return [Meteor.subscribe("polls"), Meteor.subscribe("userAnswered")];
	},

	action: function () {
		this.render("polls", {
			data: function () {
				// Return a cursor of all polls
			}
		});
	}

});

// Create a route for /new which renders the "new" template
	// No subscroptions or data need to be loaded