function Slide(node, options) {
    // 配置默认参数   
    var defaultConf = {
        container: $('#slider'),
        timer: null,
        number: 0,
        autoPlay: true
    };

    // 判断用户是否传入参数并进行参数合并
    this.conf = $.extend(defaultConf, options || {});

    this.elem = {};
    this.init();
    this.go();
}

Slide.prototype.init = function () {
    var self = this,
        $container = this.conf.container,
        imgItem = $container.children(),
        imgSize = imgItem.size(),
        imgWidth = imgItem.width();

    // 给图片添加一个父容器包裹层   
    imgItem.wrapAll('<div class="slider-main"></div>');
    var $wrap = imgItem.parent('.slider-main'),
        // 创建指示器的父容器包裹层
        $sliderNav = $('<ul class="slider-nav"></ul>');

    $wrap.width(imgSize * imgWidth)
        // 创建可视区容器 
        .wrapAll('<div class="viewPoint"></div>');

    // 通过遍历图片个数创建对应的指示器
    imgItem.each(function (index) {
        $(this).addClass('slider-panel')
            .attr('data-index', index);
        $sliderNav.append($('<li class="slider-item" data-index="' + index + '">' + index + '</li>'));
    });

    // 创建左箭头和右箭头
    var $prev = $('<a class="prev arrow"><</a>'),
        $next = $('<a class="next arrow">></a>'),
        $viewPoint = $wrap.parent('.viewPoint');

    $viewPoint.append($prev)
        .append($next)
        .append($sliderNav);
    $('.slider-item:first').addClass('slider-selected');

    // 给左箭头绑定点击事件   
    $prev.on('click', function (e) {
        self.prev();
    });

    // 给右箭头绑定点击事件   
    $next.on('click', function (e) {
        self.next();
    });

    this.elem.imgWrapper = $wrap;
    this.elem.imgWidth = imgWidth;
};

Slide.prototype.go = function (current) {
    var self = this,
        $wrap = this.elem.imgWrapper,
        imgWidth = this.elem.imgWidth;

    $wrap.stop(true, true).animate({
        left: current * -imgWidth
    }, function () {
        self.conf.number = current;
    });
};

Slide.prototype.prev = function () {
    this.go();
};

Slide.prototype.next = function () {
    this.go(this.conf.number + 1);
};

var s1 = new Slide();