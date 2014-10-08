// a local collection that only lives in browser, does not synchronize with database

Errors = new Meteor.Collection(null);

throwError = function(message){
	Errors.insert({message: message});


};