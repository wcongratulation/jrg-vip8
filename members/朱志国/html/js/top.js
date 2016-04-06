$(document).ready(function () {

	$('.nav li:last').css({
		"background":"none"
	})

	// 导航下拉
	$('.ndown').hover(function () {
		$('.ndown').addClass('ndown2');
		$('.navchild').show();
	},function () {
		$('.ndown').removeClass('ndown2');
		$('.navchild').hide();
	})

	// 登入下拉
	$('.tlogo').hover(function () {
		$('.tlogochild').show();
	},function () {
		$('.tlogochild').hide();
	})

	var h=document.documentElement.scrollHeight||document.body.scrollHeight;
	$('.popbox').height(h+'px');

	$('.tlogo').click(function () {
		$('.popbox').show();
	})
	$('.closed').click(function () {
		$('.popbox').hide();
	})


	$('.linkl li').click(function () {
		$('.linkl li').removeClass('lsel');
		$('.linkl li').eq($(this).index()).addClass('lsel');
		$('.linkshow').removeClass('lshow');
		$('.linkshow').eq($(this).index()).addClass('lshow');
	})

	


})

// 兼容css3阴影和圆角
$(function() {
    if (window.PIE) {
        $('.rounded').each(function() {
            PIE.attach(this);
        });
    }
})


