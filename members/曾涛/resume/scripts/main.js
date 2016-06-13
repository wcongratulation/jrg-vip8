(function() {
    $.fn.gotoTop = function(options) {
        // 默认的参数配置    
        var defaultConf = {
            inertval: 800,
            container: $(window),
            fadeTime: 'normal'
        };

        var conf = $.extend(defaultConf, options || {}),
            $this = $(this);
        // 判断用户传入的参数为DOM对象 || jQuery对象
        // jQuery对象再包装一遍会生成一个新的jQuery对象

        $this.on('click', function(e) {
            $('html, body').stop(true, true).animate({
                scrollTop: 0
            }, conf.interval);
        });
        conf.container.on('scroll', function(e) {
            $(this).scrollTop() > 0 ? $this.fadeIn(conf.fadeTime) : $this.fadeOut(conf.fadeTime);
        });

        return this;
    }
}());

$('.btn').gotoTop();