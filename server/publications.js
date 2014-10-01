/* Tells server what data is ok to send to client. How we make our app secure */

// returns a cursor referencing all posts 
Meteor.publish('posts',
function(){
	return Posts.find();
});

// return all posts but not their date property
Meteor.publish('allPosts',
function(){
	return Posts.find({}, {fields:
		{
			date: false
		}});
});





/*
// returns a cursor referencing only unflagged posts 
Meteor.publish('posts',
function(){
	return Posts.find({flagged: false});
});

// returns a cursor referencing only unflagged posts where author matches
Meteor.publish('posts',
function(){
	return Posts.find({flagged: false, author: author});
});

// 
Meteor.publish('posts', )
*/
