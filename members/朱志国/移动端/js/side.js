Zepto(function($){
	$('#btn_m').click(function(){
	  $('body').addClass('show');
	});
	$('.close').click(function(){
		$('body').removeClass('show');
		$('.sItem').removeClass('cur');
	});
	$('.sItem').each(function(){
		var $infor=$(this).find('.sInfor');
		$(this).click(function(){
			if($infor.css('display') == 'none'){
				$(this).addClass('cur').siblings('.sItem').removeClass('cur');
			}else{
				$(this).removeClass('cur')
			}
		});
	});

})