$(document).ready(function(){
	
	$(".banner_ctrl a").hover(function(){
		$(this).fadeTo(100,.2);
		},function(){
		$(this).fadeTo(100,.1);
	});
			
	var tNum=$(".m_banner .banner").length-1;
	var nNum=0;		
	$(".banner_ctrl .prev").click(function(){
		(nNum-1)<0?n2=tNum:n2=nNum-1;
		bSwitch(nNum,n2);
		nNum=n2;
	});	
	$(".banner_ctrl .next").click(function(){
		(nNum+1)>tNum?n2=0:n2=nNum+1;
		bSwitch(nNum,n2);
		nNum=n2;
	});
	function bSwitch(nNum,n2){
		$(".m_banner .banner:eq("+nNum+")").fadeOut();
		$(".m_banner .banner:eq("+n2+")").fadeIn();
	};
							
	$(function(){
		var switchTime;
	 	$(".m_banner").hover(function(){
			clearInterval(switchTime);
		},function(){
		switchTime = setInterval(function(){
			(nNum+1)>tNum?n2=0:n2=nNum+1;
			bSwitch(nNum,n2);
			nNum=n2;
		},8000);
		}).trigger("mouseleave");
	});
	
	
	
	<!--展开全文-->
	$('.both_txt').click(function () {
        $(this).prev().toggleClass('autocon');
        	if ($(this).text() == "[查看全文]") {
				$(this).text('[收起]');
			} else {
				$(this).text('[查看全文]');
			}
    })	
	
	
	<!--保存成功的提示框-->
	function favhide () {
	  $('.refer_tip').hide();
	}favhide ();
	$('#lianxi').on('click',function () {
	  $('.refer_tip').show();
	  timer = setTimeout(favhide,3000);
	})
	
	
	
	
	

});






