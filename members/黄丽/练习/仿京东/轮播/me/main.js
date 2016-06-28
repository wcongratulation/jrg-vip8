/**
 * Created by 非也 on 2016/6/28.
 */
$.fn.slide = function(options){
        var $arts = this;
        var $art=$(this).eq(0);
        var current = 0;
        var $pics = $art.children().wrapAll('<div class="list"></div>').css({
        float:'left'
    });
        var $list = $art.children().wrapAll('<div class="viewpoint"></div>').css({
            overflow:'hidden',
            width:$pics.length*options.width,
            left:0,
            position:'relative'
        });
        var $viewpoint = $art.children().css({
            width:options.width,
            overflow:'hidden'
        });
    var hover = false;
    var $prev = $('<button class="prev"><</button>').appendTo($viewpoint);
    var $next = $('<button class="next">></button>').appendTo($viewpoint);
    var $numb= $('<li class="numb active">1</li><li class="numb">2</li><li class="numb">3</li><li class="numb">4</li><li class="numb">5</li>').appendTo($arts).wrapAll('<ul class="Numb"></ul>');

    var go = function(index){
            if(index<0){
                index = $pics.length-1;
            }else if(index>$pics.length-1){
                index=0;
            }
            if(timer){
                window.clearInterval(timer);
            }
            var left = index *(-730);
            $list.stop(true,true).animate({left:left},function(){
                current = index;
                if(!hover){
                    autoPlay();
                }
            });
    };

    var prev = function(){
        go(current-1);
        numbPlay();
    };
    var next = function(){
        go(current+1);
        numbPlay();
    };
    var $Numb = $('.Numb');
    $Numb.find('li').on('click',function(){
        var $this = $(this);
        var ind = $this.index();
        go(ind);
        numbPlay();
    });
    var numbPlay = function(){
        $Numb.children().eq(current).addClass('active').siblings('.active').removeClass('active');
    };

    $prev.on('click',function(){
            prev();
        });
        $next.on('click',function(){
            next();
        });

        var timer;
        var autoPlay = function(){
            timer = setInterval(function(){
                go(current+1);
            },2000);
            numbPlay();
        };

        $pics.on('mouseenter',function(){
            window.clearInterval(timer);
            hover = true;
        }).on('mouseleave',function(){
            hover = false;
            autoPlay();
        });
        if(options.auto){
            autoPlay();
        }

};

$('.arts').slide({
    width:730,
    hieght:454,
    auto:true
});