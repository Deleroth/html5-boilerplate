console.log('Hello world!');

$(document).ready(function() {

  $(window).scroll(function() {
  	/*
 +		Parallax Header
 +	*/ 
 	console.log (scroll);
	var offsetAmount = -($(window).scrollTop() * 0.5);
	console.log (offsetAmount);
	$('section.backgroundimage').css({
		'background-position-y': offsetAmount
		});
	});


	/*
		Gallery
	*/

	var images = ['img/schoolmedia.png', 'img/superheroes.png', 'img/wedgeit.png', 'img/lightshadow.png'];
	var counter = 0;

	$('.nextbutton img').click(function() {
		counter++;
		if (counter === images.length) {
			counter = 0;
		}
		$('.gallery img').attr('src', images[counter]);
	});

	$('.backbutton img').click(function() {
		
		if (counter === 0) {
			counter = images.length - 1;
		} else {
			counter--;
		}


		console.log(counter);

		$('.gallery img').attr('src', images[counter]);
	});

});
