//jQuery function to return either an error or shortened url on form submit
$('button').on('click', function(e) {
	$('.errorMessage, .short').remove();
	const urlObj = {};
	const newUrl = $('#url').val();
	if(!newUrl){
		$('form').before('<p class="errorMessage">Please Enter a valid url</p>');
		$('.errorMessage').show();
	} else {
		urlObj.url = newUrl;
		$.post('/newUrl', urlObj)
		 .done(function(data){
		 	$('form').after('<div class="short"><h2>Your Shortened URL is: </h2><p>http:localhost:9000/'+data._id+'</p></div>');
		 });
	}
	e.preventDefault();
});