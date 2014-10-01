/* Set up posts to be published in their entirety. Returns a cursor referencing all posts */

Meteor.publish('posts',
function(){
	return Posts.find();
});