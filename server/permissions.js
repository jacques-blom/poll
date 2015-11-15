
Polls.allow({

	insert: function (userId, doc) {
		return (userId && doc.user === userId);
	},

	// Disallow any updates
	
	// Allow only the owner to remove a Poll

});