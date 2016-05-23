// min.js
$('.menu > li').on('mouseenter',function(e){
    var $current = $(e.currentTarget);
    var index = $current.attr('data-index');
    var indexNumber = +index;
    $('.submenu').children('li.active').removeClass('active');
    $('.submenu').children('li').eq(indexNumber).addClass('active');
});
$('.menu>li').on('mouseleave', function(e){
    var $current = $(e.currentTarget);
    var index = $current.attr('data-index');
    var indexNumber = +index;
    console.info(index);
    $('.submenu').children('li.active').removeClass('active');
});