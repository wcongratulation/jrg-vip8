
$.goShow = function(){
	var $nav = $('header.siteTop-wrapper')
	console.log($nav)
	$(window).on('scroll',function(){
		var offsetY = $(this).scrollTop();
		console.log(offsetY)
		if (offsetY>100) {
			$nav.addClass('visible');
		}else{
			$nav.removeClass('visible')
		}
	})
}
$.goShow()
