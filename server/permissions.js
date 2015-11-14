
Polls.allow({

	insert: function (userId, doc) {
		return (userId && doc.user === userId);
	},

	update: function (userId, doc) {
		return false;
	},

	remove: function (userId, doc) {
		return (userId && doc.user === userId);
	}

});