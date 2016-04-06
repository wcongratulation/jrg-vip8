$(document).ready(function () {

	var ah=document.documentElement.scrollHeight||document.body.scrollHeight;
	$('.askpop,.scitypop,.asksupop,.tipspop,.areapop,.keypop,.invipop,.contantpop,.yqsucpop,.samepop,.deletpop').height(ah+'px');

	// 搜索弹出框效果
	$('.aminp').click(function () {
		$('.amapthree,.amapfour').show();
		$('.amapone,.amaptwo').hide();
	})
	$('.aminp2').click(function () {
		$('.amapone,.amaptwo').show();
		$('.amapthree,.amapfour').hide();
		var stxt1 = $('.amapthree select option:selected').eq(0).text()
		var stxt2 = $('.amapthree select option:selected').eq(1).text()
		var stxt3 = $('.amapthree select option:selected').eq(2).text()
		$('.amapone').text(stxt1 +' '+ stxt2 +' '+ stxt3);
		
	})

	$('.tagadd').eq(1).hide();
	$('.tup').hide();
	$('.tagadd:first').click(function () {
		$('.tagadd').eq(0).hide();
		$('.tagr ul.tful').hide();
		$('.tagr ul.tsul').show();
		$('.tagadd').eq(1).show();
		$('.taginp').show();
		$('.tup').show();
	})
	$('.tagadd').eq(1).click(function () {
		if ($('.taginp').val()!='')
		{
			$('.tagr ul.tsul').append('<li>'+$('.taginp').val()+'</li>');
			// $(".tagr ul.tsul").bind("click", function(event){
			// 	 var $target = $(event.target);
			// 	     $target.toggleClass('set');
			// 	     $target.clone().appendTo('.tagr ul.tful');
			// });
			$('.taginp').val('');
		}else
		{
			alert('请输入xxx');
		}
	})



	$('.tagr ul.tsul li').live('click',function () {		
		$(this).toggleClass('set');
		$(this).clone().appendTo('.tagr ul.tful')
	})


	$(".tagr ul.tful").bind("click", function(event){
		 var $target = $(event.target);
		     $target.remove();
	});

	$('.tup').click(function () {
		$('.tagadd').eq(0).show();
		$('.tagr ul.tful').show();
		$('.tagr ul.tsul').hide();
		$('.tagadd').eq(1).hide();
		$('.taginp').hide();
		$('.tup').hide();
	})

	$('.qbut,.qbut2,.nask').click(function () {
		$('.askpop').show();
	})
	$('.aclose,.asbuttwo').click(function () {
		$('.askpop,.asksupop,.tipspop,.invipop,.yqsucpop,.contantpop,.samepop,.deletpop').hide();
	})


	$('.asbutone').click(function () {
		$('.askpop,.scitypop').hide();
		$('.asksupop').show();
	})



	// 同城专家开始

	$('.cityname').click(function () {
		$(this).next().show();
	})
	$('.scclose').click(function () {
		$('.scnpop,.n-scnpop').hide();
	})

	$('.scnlistr li').click(function () {
		$(this).parent().parent().parent().parent().parent().parent().prev().text($(this).text());
	})

	$('.scclose').click(function () {
		$('.scnpop').hide();
	})
	$('.scnptitle li').hover(function () {
		$('.scnptitle li').removeClass('scset').eq($(this).index()).addClass('scset');
		$('.ccndetail').removeClass('cshow').eq($(this).index()).addClass('cshow');
	})

	$('.scmone').hover(function () {
		$(this).siblings().children('.scmtthree,.scmtfour').show();
		$(this).siblings().children('.scmtone,.scmttwo').hide();
	},function () {
		$(this).siblings().children('.scmtthree,.scmtfour').hide();
		$(this).siblings().children('.scmtone,.scmttwo').show();
	})

	$('.n-scmone').hover(function () {
		$(this).children('.n-scmrz').show();
		$(this).siblings().children('.n-scmtthree,.n-scmtfour').show();
		$(this).siblings().children('.n-scmtone,.n-scmttwo').hide();
	},function () {
		$(this).children('.n-scmrz').hide();
		$(this).siblings().children('.n-scmtthree,.n-scmtfour').hide();
		$(this).siblings().children('.n-scmtone,.n-scmttwo').show();
	})


	$('.scmask').click(function () {
		$('.scitypop').show();
	})

	$('.sclose,.asbuttwo').click(function () {
		$('.scitypop').hide();
	})

	$('.stagadd').click(function () {
		if ($('.staginp').val()!='')
		{
			$('.tagr ul.scul').append('<li>'+$('.staginp').val()+'</li>');
			$('.staginp').val('');
		}else
		{
			alert('请输入xxx');
		}
	})

	$(".tagr ul.scul").bind("click", function(event){
		 var $target = $(event.target);
		     $target.remove();
	});


	// 大家都在说排序
	$('.esorttop').click(function () {
		$('.esortmain').show();
	})
	$('.esortmain span').click(function () {
		$('.esorttop').text($(this).text());
		$('.esortmain').hide();
	})

	$('.everytright').hover(function () {
		$(this).children('.evtrone').hide();
		$(this).children('.evtrtwo').show();
	},function () {
		$(this).children('.evtrone').show();
		$(this).children('.evtrtwo').hide();
	})

	if ($('.evbname').width() >= 500) {
		$('.evbname').css({
			'width':'500px',
			'overflow':'hidden',
			'text-overflow':'ellipsis',
			'white-space':'nowrap'
		})
	}else{
		$('.evbname').css('width','auto')
	}

	if ($('.pname').width() >= 500) {
		$('.pname').css({
			'width':'400px',
			'overflow':'hidden',
			'text-overflow':'ellipsis',
			'white-space':'nowrap'
		})
	}else{
		$('.pname').css('width','auto')
	}

	$('.etitulone li').click(function () {
		$('.etitulone li').removeClass('sel').eq($(this).index()).addClass('sel');
		$('.etitulone li span').addClass('orange').eq($(this).index()).removeClass('orange');
		$('.everymain').removeClass('evshow').eq($(this).index()).addClass('evshow');
	})
	
	$('.etitultwo li').click(function () {
		$('.etitultwo li').removeClass('sel').eq($(this).index()).addClass('sel');
		$('.everymain').removeClass('evshow').eq($(this).index()).addClass('evshow');
	})

	// 热门资讯开始

	$('.rtipsr').click(function () {
		$('.rtips').hide();
	})

	$('.hotnews dl:last').css('border','none');

	// 大家都在找效果

	$('.finds li:odd').css("background","#38aae6");

	// 上周问答大师
	$('.masterslist:last').css('border','none')
	$('.mastersl').hover(function () {
		$(this).siblings().children('.mashover').show();
		$(this).siblings().children('.masdetail').hide();
		$(this).children('.maslname').hide();
	},function () {
		$(this).siblings().children('.mashover').hide();
		$(this).siblings().children('.masdetail').show();
		$(this).children('.maslname').show();
	})

	// 常见问题
	$('.commonlist:last').css('border','none')

	// 列表页设置地区
	// 插入关键地区
	$('.areatop li').click(function () {
		$('.areatop li').removeClass('aset').eq($(this).index()).addClass('aset');
		$('.areadetal').removeClass('arshow').eq($(this).index()).addClass('arshow');
	})

	$('.areadetal li').click(function () {
		$(this).toggleClass('arset');
		$(this).clone().appendTo('.aulone')
	})

	$('.aulone li').live('click',function () {
		$(this).remove();
	})



	$('.farea').click(function () {
		$('.areapop').show();
	})
	$('.areclose,.setbut').click(function () {
		$('.areapop').hide();
		$('.sultwo').html($('.aulone').html());
		// $('.sultwo li').html('<a href="#">'+$('.sultwo li').html()+'</a>'); 给所有的li加链接
	})



	// 插入关键词
	$('.klbut').click(function () {
		if ($('.klinp').val()!='')
		{
			$('.keyltwo').append('<li>'+$('.klinp').val()+'</li>');
			$('.klinp').val('');
		}else
		{
			alert('请输入xxx');
		}
	})




	$('.keyltwo li').live('click',function () {
		$(this).toggleClass('arset');
		$(this).clone().appendTo('.keylone')
	})


	$('.keylone li').live('click',function () {
		$(this).remove();
	})

	

	$('.fkey').click(function () {
		$('.keypop').show();
	})
	$('.keyclose,.keybut').click(function () {
		$('.keypop').hide();
		$('.sulthree').html($('.keylone').html());
		// $('.sultwo li').html('<a href="#">'+$('.sultwo li').html()+'</a>'); 给所有的li加链接
	})

	// 详细页提问开心

	$('.aex').hover(function () {
		$('.aexcon').show();
	},function () {
		$('.aexcon').hide();
	})
	$('.ptagsr').click(function () {
		$('.ptagsr,.Invite2').hide();
		$('.ptagsrh,.parea,.psublist').show();
	})
	$('.psbut').click(function () {
		$('.ptagsr,.Invite2').show();
		$('.ptagsrh,.parea,.psublist').hide();
	})


	// 全部回答
	$('.dpict').hover(function () {
		$(this).children('.dpicth').show();
	},function () {
		$(this).children('.dpicth').hide();
	})
	 $('.pprize:last').css('background','none')

	// 查看详情
	$('.psee').click(function () {
		$(this).parent().siblings('.pdetail').show();
	})
	$('.pdfold').click(function () {
		$(this).parent().hide();
		var stp = $(window).scrollTop() - 800;
		$(window).scrollTop(stp);
	})


	$('.hlist').eq(2).css('border','none');
	$('.hlist').eq(3).css('border','none');

	// 邀请回答弹出框效果
	$('.pwei').hover(function () {
		$(this).next().show();
	},function () {
		$(this).next().hide();
	})

	$('.inpl').hover(function () {
		$(this).next().children('.inprs').hide();
		$(this).next().children('.inprh').show();
	},function () {
		$(this).next().children('.inprs').show();
		$(this).next().children('.inprh').hide();
	})

	$('.pagcon span').click(function () {
		$('.farther').show();
	})

	$('.Invite').click(function () {
		$('.invipop').show();
	})


	$('.cpbutone').click(function () {
		$('.contantpop').hide();
		$('.yqsucpop').show();
	})

	$('.pletans').click(function () {
		$('.contantpop').show();
		$(window).scrollTop(10);
	})

	$('.asked').click(function () {
		$(this).parent().hide();
		$(this).parent().next().show();
		$(this).parent().next().next().show();
	})

	$('.askedh').click(function () {
		$(this).parent().hide();
		$(this).parent().prev().hide();
		$(this).parent().prev().prev().show();
	})

	$('.askblue').click(function () {
		$(this).hide();
		$(this).parent().next().show();
	})
	$('.arebut').click(function () {
		$(this).parent().parent().hide();
		$(this).parent().parent().prev().children('.askblue').show();
	})


	// 同问弹出框效果

	$('.sameask').click(function () {
		$('.askpop').show();
	})
	$('.satagadd').click(function () {
		if ($('.sataginp').val() != "") {
			$('.tagr ul.sametsul').append('<li>'+$('.sataginp').val()+'</li>');
			$('.sataginp').val('');
		}else
		{
			alert('请输入xxx');
		}
	})

	$('.samebut').click(function () {
		$('.askpop').hide();
		$('.samepop').show();
	})

	$('.Invite2').click(function () {
		$('.invipop').show();
	})


	$('.delet').click(function () {
		$('.deletpop').show();
	})
	$('.delbuttwo').click(function () {
		$('.deletpop').hide();
	})


})



