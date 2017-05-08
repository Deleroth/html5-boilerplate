console.log('Hello world!');

	var offsetAmount = -($(window).scrollTop() * 2.5);
	$('header').css({
		'background-position-y': offsetAmount
	});
	