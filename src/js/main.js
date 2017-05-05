console.log('Hello world!');

var headerHeight = null;

$(document).ready(function() {
	console.log('ready');
	headerHeight = $('header').height();
	console.log (headerHeight);
});

$(window).resize(function() {
	console.log('resize');
});

$(window).scroll(function() {
	console.log('scroll');
});