
Router.configure({
	layoutTemplate: "base"
});

Router.route("/", {
	
	subscriptions: function () {
		return [Meteor.subscribe("polls"), Meteor.subscribe("votedPolls"), Meteor.subscribe("userAnswered")];
	},

	action: function () {
		this.render("polls", {
			data: function () {
				return Polls.find();
			}
		});
	}

});

Router.route("/new", function () {
	this.render("new");
});