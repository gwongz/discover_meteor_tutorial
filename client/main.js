/* How clients specify what data they want to load at that moment */

// returns all posts
Meteor.subscribe('posts');

// return posts whose author is bob-smith
// pick and choose - how to make app scalable and prevent overload of browser memory
// Meteor.subscribe('posts', 'bob-smith');
