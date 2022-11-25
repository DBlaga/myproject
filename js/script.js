$('.my-burger > *').click(function (e) {
	$('.my-burger').toggleClass('active');
	$('html').toggleClass('lock');
	$('._wrapper').toggleClass('slide');
});

$(document).mouseup(function (e) {
	var container = $('._wrapper');
	if (container.has(e.target).length === 0) {
		$('.my-burger').removeClass('active');
		$('._wrapper').removeClass('slide');
		$('html').removeClass('lock');
	}
});