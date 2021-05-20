$(document).ready(function ($) {
	$('.modal-open').click(function () {
		$('.modal-fade').fadeIn();
		return false;
	});

	$('.modal-close').click(function () {
		$('.modal-fade').fadeOut();
		return false;
	});

	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal-fade').fadeOut();
		}
	});

});