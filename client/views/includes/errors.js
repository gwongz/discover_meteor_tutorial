Template.errors.helpers({
	errors: function(){
		// return all the errors in the local errors collection
		return Errors.find();
	}

});

Template.error.rendered = function(){
	// 'this' refers to current template instance
	// 'this.data' is the object that is currently being rendered
	var error = this.data;
	Meteor.defer(function(){
		console.log('template rendered so setting error to seen is true');
		Errors.update(error._id, {$set: {seen:true}});
	});
};
