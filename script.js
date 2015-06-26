$(document).ready(function() {
	//cindy jump effect
	$('.cindy').on('click', function() {
		$('.cindy').slideUp(1000, function() {
			$(this).find('img').html();
			$('#cursor').css('display', 'none');
			$('.cindy_jump').slideDown(1000);
		})
	})
});