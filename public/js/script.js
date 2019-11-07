$('button').on('click', function(e) {
	const urlObj = {};
	const newUrl = $('#url').val();
	if(!newUrl){
		$('.errorMessage').show();
	} else {
		urlObj.url = newUrl;
		$.post('/newUrl', urlObj)
		 .done(function(data){
		 	$('form').after('<h2>Your Shortened URL is: </h2><p>http:localhost:9000/'+data._id+'</p>');
		 });
	}
	e.preventDefault();
});