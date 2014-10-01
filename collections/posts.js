/* available to both client and server. collections take care of synchronising data between Mongo and client.
Collection works in different ways in different context. On server it reads and writes to DB. On client, collection
is a secure copy of subset of real canoncial collection*/

Posts = new Meteor.Collection('posts');

