function Slider(node, options) {
    // 配置默认参数
    var defaultConf = {
        container: node,
        index: 0,
        autoPlay: true,
        interval: 1500,
        direction: 'next',
        isAnimate: false
    };

    // 判断用户是否传入参数并进行参数合并
    this.config = $.extend({}, defaultConf, options || {});

    // 将需要使用的参数提前获取出来   
    this.container = this.config.container;
    this.currentIndex = this.config.index > 5 ? 0 : this.config.index;
    this.timer = null;

    // 调用方法
    this.init();
    this.bindEvent();
}

Slider.prototype.autoPlay = function () {
    // _self指向Slider这个类，其作用是当作用域改变时this的值不改变   
    var _self = this;
    clearInterval(this.timer);
    this.timer = setInterval(function () {
        // 判断参数里的方向     
        if (_self.config.direction === 'next') {
            // (0 + 1) % 4 
            // (1 + 1) % 4 ...
            _self.play((_self.currentIndex + 1) % _self.$imgSize);
        } else {
            // (4 + 0 - 1) % 4
            // (4 + 3 - 1) % 4 ...
            _self.play((_self.$imgSize + _self.currentIndex - 1) % _self.$imgSize);
        }
    }, _self.config.interval);
};

Slider.prototype.init = function () {
    var $container = this.container,
            $links = $container.children('a'),
          $imgItem = this.$imgItem = $container.find('img'),
           imgSize = this.$imgSize = $imgItem.size(),
            $extra = $('<div class="slider-extra"></div>'),
             _self = this;

    // 创建无序列表元素   
    $links.wrap('<li class="slider-panel"></li>');

    var $li = this.$li = $container.find('.slider-panel');
    $li.wrapAll('<ul class="slider-main"></ul>');

    // 索引为index的图片显示成第一张
    $li.eq(this.currentIndex).css('opacity', 1);

    // 创建指示器的父容器和箭头的父容器
    var $sliderExtra = $('<div class="slider-extra"></div>'),
       $arrowWrapper = $('<div class="slider-page"></div>'),
          $indicator = this.$indicator = $('<ul class="slider-nav"></ul>');

    // 通过遍历图片个数创建对应的指示器
    $imgItem.each(function (index, elem) {
        $indicator.append($('<li class="slider-item">' + (index + 1) + '</li>'));
    });

    // 创建左箭头和右箭头
    var $prev = $('<a class="slider-prev arrow">' + '<' + '</a>'),
        $next = $('<a class="slider-next arrow">' + '>' + '</a>');

    // 追加对应的dom节点   
    $arrowWrapper.append($prev)
                 .append($next);

    $sliderExtra.append($indicator)
                .append($arrowWrapper);

    $container.append($sliderExtra);

    // 索引为index的指示器显示成第一个     
    var $indicatorItem = this.$indicatorItem = $container.find('.slider-item');
    $indicatorItem.eq(this.currentIndex)
                  .addClass('slider-selected')
                  .css('opacity', 1);

    // 自动播放
    if (this.config.autoPlay) {
        this.autoPlay();
        $container.on('mouseenter', function (e) {
            $prev.fadeIn();
            $next.fadeIn();
            clearInterval(_self.timer);
        }).on('mouseleave', function (e) {
            $prev.fadeOut();
            $next.fadeOut();
            _self.autoPlay();
        });
    }
};

Slider.prototype.play = function (index) {
    var _self = this;

    // 防止用户进行恶意的点击操作   
    if (this.config.isAnimate) return;
    this.config.isAnimate = true;

    // 当前的图片淡出   
    this.$li.eq(this.currentIndex).animate({
        'opacity': 0
    });

    // 下一张图片淡入   
    this.$li.eq(index).animate({
        'opacity': 1,
        'z-index': 1
    }, function () {
        _self.config.isAnimate = false;
    });

    // 将下一张图片切换为当前的图片   
    this.currentIndex = index;

    // 指示器状态的切换   
    this.$indicatorItem.removeClass('slider-selected').eq(index)
                       .addClass('slider-selected');
};

Slider.prototype.bindEvent = function () {
    // 箭头必须是this.container的后代元素，这样有多个轮播图同时执行时互相不会影响 
    var prev = this.container.find($('.slider-prev')),
        next = this.container.find($('.slider-next')),
       _self = this;

    // 给右箭头绑定点击事件   
    next.on('click', function (e) {
        _self.play((_self.currentIndex + 1) % _self.$imgSize);
    });

    // 给左箭头绑定点击事件   
    prev.on('click', function (e) {
        _self.play((_self.$imgSize + _self.currentIndex - 1) % _self.$imgSize);
    });

    // 通过事件委托为指示器绑定点击事件
    var childName = this.$indicator.children().get(0).nodeName.toLowerCase();
    this.$indicator.on('click', childName, function (e) {
        _self.play($(this).index());
    });
};

var test = new Slider($('.slider'));
var test1 = new Slider($('.slider1'));
var test2 = new Slider($('.slider2'));