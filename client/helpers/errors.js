// a local collection that only lives in browser, does not synchronize with database

Errors = new Meteor.Collection(null);

throwError = function(message){
    Errors.insert({message: message, seen: false});


};

// once an error has been displayed to user, remove it from the collection
clearErrors = function(){
    console.log('removing seen errors');
    Errors.remove({seen: true});
};