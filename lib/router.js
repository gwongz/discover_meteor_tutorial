Router.configure({
	// use layout.html template as default 
	layoutTemplate: 'layout',
	// default loading template to redirect user to while 
	// app is waiting for data
	loadingTemplate: 'loading',
	waitOn: function(){
		// move subscription from main to here 
		return Meteor.subscribe('posts');
	}
});

Router.map(function(){
	// postsList route that maps to '/' path
	// naming route allows us to use useful template helpers
	this.route('postsList', {path: '/'});

	// _id syntax tells route to pass any pattern there to router's param array
	this.route('postPage', {
		path: '/posts/:_id',
		// find the appropriate post and pass it to the template
		// 'this' is currently matched route so this.params is route's param array
		// data context is how you control value of 'this' in templates
		data: function(){return Posts.findOne(this.params._id);}
	});

	this.route('postEdit', {
		path: '/posts/:_id/edit',
		data: function(){return Posts.findOne(this.params._id);}
	});

	// a page for users to submit posts
	this.route('postSubmit', {
		path: '/submit'
	});

});

var requireLogin = function(pause){
	if (! Meteor.user()){
		if (Meteor.loggingIn())
			this.render('loading');
		else
			this.render('accessDenied');
		pause();
	}
};

// loading hook 
Router.onBeforeAction('loading');

// hook that intercepts route for submit and checks 
// login status first 
Router.onBeforeAction(requireLogin, {
	only: 'postSubmit'
});

// clear errors whenever navigating to different page
Router.onBeforeAction(function(){
	clearErrors();
});
