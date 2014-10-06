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
});

// loading hook 
Router.onBeforeAction('loading');