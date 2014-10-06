Template.postSubmit.events({
	'submit form': function(e){

		// make sure browser doesnt try to submit the form
		e.preventDefault();

		var post = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val(),
			message: $(e.target).find('[name=message]').val()
		};
		
		// Using a method instead of directly inserting
		Meteor.call('post', post, function(error, id){
			if (error){
				return alert(error.reason);
			}
		});

		Router.go('postsList');

			// constructs url to redirect user to 
			// Router.go('postPage', {_id: id});

		
		// post._id = Posts.insert(post);
		


	}

});