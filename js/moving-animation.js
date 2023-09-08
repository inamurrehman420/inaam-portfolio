// floating-item js here

$(document).ready(function ($) {
	"use strict";
});

// Banner Moving JS Start
var floatingX = 0,
	floatingY = 0,
	x = 0,
	y = 0,
	friction = 1 / 30;

function floatingBg() {
	x += (floatingX - x) * friction;
	y += (floatingY - y) * friction;

	//  translate = 'translateX(' + x + 'px, ' + y + 'px)';
	translate = 'translateX(' + x + 'px) translateY(' + y + 'px)';

	$('.floating-item').css({
		'-webit-transform': translate,
		'-moz-transform': translate,
		'transform': translate
	});

	window.requestAnimationFrame(floatingBg);
}

$(window).on('mousemove click', function (e) {

	var isHovered = $('.floating-item:hover').length > 0;

	if (!isHovered) {
		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX)),
			lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));

		floatingX = (20 * lMouseX) / 100;
		floatingY = (10 * lMouseY) / 100;
	}
});

floatingBg();




