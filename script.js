$(document).ready(function() {
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
	//cindy jump effect
	$('.cindy').on('click', function() {
		$('.cindy').slideUp(1000, function() {
			$(this).find('img').html();
			$('.cursor').css('display', 'none');
			$('.cursor_jump').css('display', 'inline');
			$('.cindy_jump').slideDown(1000);
			$('#caption').replaceWith("<h3 id='caption'>Or not if you prefer.</h3>");
		});
	});

	//reverse jump
	$('.cindy_jump').on('click', function() {
		$('.cindy_jump').slideUp(1000, function() {
			$(this).find('img').html();
			$('.cursor_jump').css('display', 'none');
			$('.cursor').css('display', 'inline');
			$('.cindy').slideDown(1000);
			$('#caption').replaceWith("<h3 id='caption'>See me jump.</h3>");
		});
	});

	//Slide down to about section
	$(".down").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".about").offset().top
	    }, 1000);
	});

	$(".up").click(function() {
		$('html, body').animate({
			scrollTop: $(".opening").offset().top
		}, 1000)
	});

	$(".nav-about").click(function() {
		$('html, body').animate({
			scrollTop: $(".about").offset().top
		}, 1000);
	});

	$(".nav-projects").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".projects").offset().top
	    }, 1000);
	});

	$(".nav-contact").click(function() {
		$('html, body').animate({
			scrollTop: $(".contact").offset().top
		}, 1000);
	})

	$(".nav-home").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".opening").offset().top
	    }, 1000);
	});		

	//responsive nav bar
	var previousScroll = 0,
    	headerOrgOffset = $('.nav').height();

	$('.buttons').height($('.nav').height());

	$(window).scroll(function () {
	    var currentScroll = $(this).scrollTop();
	    if (currentScroll > headerOrgOffset) {
	        if (currentScroll > previousScroll) {
	            $('.buttons').slideUp(500);
	        } else {
	            $('.buttons').slideDown(500);
	        }
	    } else {
	            $('.buttons').slideDown(500);
	    }
	    previousScroll = currentScroll;
	});

	$('#fullpage').fullpage({
		slidesNavigation: true
	});
});