 $.fn.slides = function(){

	var width = $('.slides').width();
	var length = $(this).length
	// console.log(length)
	$('li.menu-items').on('click',function(e){
 		console.log($(this))
		var $current = $(e.currentTarget)
		//$(e.currentTarget) ==== $(this)
		// var current = $list.index();
		// console.log(current) 
		
		  /*这里不能用.index(),它返回的是当前元素的位置;
		   *如果html一开始不是当前元素，分清需求是要返回
 		   *元素位置的值还是元素数组的下标
		  */
		$current.addClass('active').siblings('.active').removeClass('active');
		var current = $current.attr('data-index');
 		var index =+current;
 	// 	console.log('here')
		// console.log(index)
		var left = index*width;
		$('.art').stop(true,true).animate({left: -left},300)
	})
	//自动点击事件
	var currentIndex = 1;
	function autoPlay(){
		if (currentIndex === -1) {return false;}
		$('li.menu-items').eq(currentIndex%length).trigger('click',[true]);
		console.log('ni')
		currentIndex++;
	}
	var changeEvery = 5;

	var itvl = setInterval(function(){autoPlay()},changeEvery*1000);

 }

