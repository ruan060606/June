$(document).ready(function() {
	'use strict'
	//reset//
	$('.myNavbar').hide(0);
	//nav appear function //
	$(document).scroll(function(){
		if ($(this).scrollTop() > 100) {
                $('.myNavbar').fadeIn();
            }else {
                $('.myNavbar').fadeOut();
            }
	})
})
