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
				throwError(error.reason);
				// return alert(error.reason);
				if (error.error === 302)
					Router.go('postPage', {_id: error.details});
			} else {
				// no error 
				Router.go('postPage', {_id: id});

			}
		});
	
	}

});