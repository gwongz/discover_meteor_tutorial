/* a manager for doing the heavy lifting in the posts_list template */

// starting with static data 


// defining the helper for the postsList template 
Template.postsList.helpers({
  // return all the objects in the posts collection
  posts: function(){
    return Posts.find();
  }
});