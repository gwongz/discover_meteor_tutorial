/* available to both client and server. collections take care of synchronising data between Mongo and client.
Collection works in different ways in different context. On server it reads and writes to DB. On client, collection
is a secure copy of subset of real canoncial collection*/

Posts = new Meteor.Collection('posts');

// when we turn off insecure, we have to declare whether client
// has insert permission

Posts.allow({
    // this is when clients are allowed to insert into Posts collection
    insert: function(userId, doc){
    // only allow posting if you are logged in
        return !! userId;
    }
});

