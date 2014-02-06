// JavaScript Document

var $ships = $('.ships img');

$('.ships-section').waypoint(function () {
	$ships.eq(0).addClass('js-ship-delay-1');
	$ships.eq(2).addClass('js-ship-delay-3');
	$ships.eq(3).addClass('js-ship-delay-2');
	$ships.addClass('js-ships-animate');
}, { offset: '60%' });