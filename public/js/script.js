$('button').on('click', function(e) {
	const urlObj = {};
	const newUrl = $('#url').val();
	if(!newUrl){
		$('.errorMessage').show();
	} else {
		urlObj.url = newUrl;
		$.post('/api/newUrl', urlObj);
	}
	e.preventDefault();
});