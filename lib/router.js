Router.configure({
	// use layout.html template as default 
	layoutTemplate: 'layout'
});

Router.map(function(){
	// postsList route that maps to '/' path
	// naming route allows us to use useful template helpers
	this.route('postsList', {path: '/'});
});