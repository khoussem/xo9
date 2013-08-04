//make section height of window
	$(function(){
		$('#intro').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#intro').css({'height':($(window).height())+'px'});
		});
	});

//custom scrollbar
	$(document).ready(
	function() {
		$("html").niceScroll();
		}
	);

//smooth scroll on page
	$(function() {
		$('#more a, .nav a, .nav li a, .brand, #footer li a').bind('click',function(event){
		var $anchor = $(this);

		$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
		});

		$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top -61
		}, 1500,'easeInOutExpo');

		event.preventDefault();
		});
	});

//collapse menu on click on mobile and tablet devices
	$('.nav a').click(function () { $(".nav-collapse").collapse("hide") });