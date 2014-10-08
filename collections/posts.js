/* available to both client and server. collections take care of synchronising data between Mongo and client.
Collection works in different ways in different context. On server it reads and writes to DB. On client, collection
is a secure copy of subset of real canoncial collection*/

Posts = new Meteor.Collection('posts');

// when we turn off insecure, we have to declare whether client
// has insert permission

Posts.allow({
    update: ownsDocument,
    remove: ownsDocument
});

// Posts.allow({
//     // this is when clients are allowed to insert into Posts collection
//     insert: function(userId, doc){
//     // only allow posting if you are logged in
//         return !! userId;
//     }
// });

// Using a Meteor method that happens on server, so don't 
// need to declare client permission
Meteor.methods({
    post: function(postAttributes){
        var user = Meteor.user()
        ,   postWithSameLink = Posts.findOne({url: postAttributes.url});

        // make sure user is logged in
        if (!user)
            throw new Meteor.Error(401, 'You need to login to post new stories');
        

        // ensure post has a title
        if (!postAttributes.title)
            throw new Meteor.Error(422, 'Please provide a headline');
        

        // check that there are no previous posts with same link
        if (postAttributes.url && postWithSameLink){
            throw new Meteor.Error(302, 'This link has already been posted', postWithSameLink._id);
        }

        // pick out whitelisted keys

        var post = _.extend(_.pick(postAttributes, 'url', 'message', 'title'),{
            // title: postAttributes.title + (this.isSimulation ? '(client)' : '(server)'),
            userId: user._id,
            author: user.username,
            submitted: new Date().getTime()
        });

        // wait for 5 seconds to observe latency compensation and simulation
        // if (! this.isSimulation){
        //     var Future = Npm.require('fibers/future');
        //     var future = new Future();
        //     Meteor.setTimeout(function() {
        //         future.return();
        //     }, 5*1000);
        //     future.wait();
        // }



        var postId = Posts.insert(post);
        return postId;

    }
});

