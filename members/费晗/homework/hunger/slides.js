// console.log(1)
// $('.next').on('click',function(){
//   var $list = $('.list').eq(0)
//   var left = $list.css('left')
//   left = parseInt(left,10)
//   console.log(left)
//   $list.animate({
//     'left': left-375
//   })
// })


$.fn.slides = function(options){
  var $courseSlides = this
  $courseSlides.each(function(){
    console.log(this)
    var $courseSlides = $(this)
    
  var $imgs = $courseSlides.children().wrap('<a href="" class=pic></a>')
  var $pics = $courseSlides.children().css({
    float: 'left',
    display: 'block'
  }).wrapAll('<div class=list></div>')
  var $list = $pics.parent().wrapAll('<div class=viewpoint></div>')
      $list.css({
        width: $pics.length*options.width,
        position: 'relative',
        left: 0,
        overflow: 'hidden'
      })
      console.log($list)
  var $viewpoint = $list.parent()
  console.log($viewpoint)
  $viewpoint.css({
    width: options.width,
    height: options.height,
    overflow: 'hidden'
  })
  var imgWidth = options.width
//html
  
  var $prev = $('<button>prev</button>').appendTo($courseSlides)
  
  var $next = $('<button>prev</button>').appendTo($courseSlides)
  
  var current = 0
  var hover = false
  var go = function(index){
    if(index<0){
      index = $pics.length-1
    }
    if(index>$pics.length-1){
      index = 0
    }
    if(timer){
      window.clearInterval(timer)
    }
    var left = index*(-imgWidth)
    $list.stop(true,true).animate({
      left: left
    },function(){
      current =index
      if(!hover){
        autoplay()
      }
      
    })
    
  }
  
  var next = function(){
    go(current+1)
  }
  var prev = function(){
    go(current-1)
  }
  
  $next.on('click',function(){
    next()
  })
  $prev.on('click',function(){
    prev()
  })
  //左右移动
  
  var timer
  $pics.on('mouseenter',function(){
    window.clearInterval(timer)
    hover = false
  }).on('mouseleave',function(){
    autoplay()
    hover = true
  })
   
  var autoplay = function(){
    timer = setInterval(function(){
      next()
    },2000)
  }
  
  if(options.auto===true){
    autoplay()
  }
    
    
  })

  
  
}




$('.courseSlides').slides({
  width: 375,
  height: 209,
  auto: true
})