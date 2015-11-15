
Template.new.events({

	"click .insert": function () {
		
		Polls.insert({
			question: $(".question").val(),

			option_1: $(".option_1").val(),
			option_2: $(".option_2").val(),
			option_3: $(".option_3").val(),

			user: Meteor.userId(),
			userName: Meteor.user().profile.name,
			inserted: new Date(),

			answersCount: 0
		});

		Router.go("/");

	}

})