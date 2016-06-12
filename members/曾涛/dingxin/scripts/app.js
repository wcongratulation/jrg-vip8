$(function(){
	$('.icon-menu img').on('click', function(e){
		if ($(this).is(':visible')) {
			$('#header-navbar .items').toggle(300);
		}
		$(window).on('resize', function(){
			$('#header-navbar .items').show();
		});
	});
});