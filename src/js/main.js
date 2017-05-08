console.log('Hello world!');



  $(window).scroll(function() {
  	/*
 +		Parallax Header
 +	*/ 
 	console.log (scroll);
	var offsetAmount = -($(window).scrollTop() * 0.5);
	$('section.backgroundimage').css({
		'background-position-y': offsetAmount
	});
	});