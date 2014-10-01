/* a manager for doing the heavy lifting in the posts_list template */

// starting with static data 
var postsData = [
  {
    title: 'Introducing Telescope',
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
  }
];

// defining the helper for the postsList template 
Template.postsList.helpers({
    // return all objects in the Posts collection
    posts: function(){
        return Posts.find();
  }
});