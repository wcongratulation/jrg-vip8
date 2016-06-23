/**
 * 
 * @authors  ()
 * @date    2016-06-23
 * @version $Id$
 */
$.fn.slides = function(){
	var $menuItems = $('li.menu-items');
	var $art = $('.art');
	var width = $('.slides').width();
	$menuItems.each(function(){
		var $list = $(this)
		$list.on('click',function(){
			console.log($list)
			// var current = $list.index();
			// console.log(current) 
			/*
			 *这里不能用.index(),它返回的是当前元素的位置;
			 *如果html一开始不是当前元素，分清需求是要返回
			 *元素位置的值还是元素数组的下标
			*/
			var current = $list.attr('date-items');
			var left = current*width;
			$list.addClass('active').siblings('.active').removeClass('active');
			$('.art').stop(true,true).animate({left: -left},300);
		})
	})
	$('.menu-items:first').addClass('active').siblings().addClass('inact');
}