
Template.login.events({

	"click .login": function () {
	
		Meteor.loginWithGoogle({}, function (err, succ) {
			console.log(err, succ);
		});

	}

});