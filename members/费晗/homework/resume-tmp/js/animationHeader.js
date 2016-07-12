/**==navShow==**/
$.goShow = function(){
	var $nav = $('header.siteTop-wrapper')
	$(window).on('scroll',function(){
		var offsetY = $(this).scrollTop();
		if (offsetY>200) {
			$nav.addClass('visible');
		}else{
			$nav.removeClass('visible')
		}
	})
}
/**==gotoTop==**/
$.goShow()
$('.gotop-js').on('click',function(){
	$('body').animate({scrollTop: 0},'slow')
})