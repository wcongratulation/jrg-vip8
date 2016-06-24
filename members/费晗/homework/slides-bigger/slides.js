// /**
//  * 
//  * @authors  ()
//  * @date    2016-06-23
//  * @version $Id$
//  */
// $.fn.slides = function(){

// 	var width = $('.slides').width();
// 	$('li.menu-items').on('click',function(e){
// 		console.log($(this))
// 		var $current = $(e.currentTarget)
// 		// var current = $list.index();
// 		// console.log(current) 
		
// 		 *这里不能用.index(),它返回的是当前元素的位置;
// 		 *如果html一开始不是当前元素，分清需求是要返回
// 		 *元素位置的值还是元素数组的下标
		
// 		$(this).addClass('active').siblings('.active').removeClass('active');
// 		var current = $current.attr('data-items');
// 		var index =+current;
// 		console.log('here')
// 		console.log(index)
// 		var left = index*920;
// 		$('.art').stop(true,true).animate({marginLeft: -left},300)
// 	})
// }