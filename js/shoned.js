$(function(){
    var oLeft =true
    // 购物车展示
   $('.shopCar').mouseover(function(){
    $('.shopCar-drop').css('display','block')
    $('.shopCat-con').addClass('shopactive')
    
})
$('.shopCar').mouseout(function(){
    $('.shopCar-drop').css('display','none')
    $('.shopCat-con').removeClass('shopactive')
})
// 二级导航

$('.navul>li').mouseover(function() {
    $('.navul .squrotrte').hide() 
    $('.navul .squrotrte').eq($(this).index()).show()
    $('.nav2 .droplist').hide()
    $('.nav2 .droplist').eq($(this).index()).show()
   })
   $('.navul>li').mouseout(function() {
    $('.navul .squrotrte').hide() 
    $('.nav2 .droplist').hide()
   })
   // tab 切换
   $('.hottitle li').mouseenter(function(){
    $('.hotmainlist').hide()
    $('.hotmainlist').eq($(this).index()).show()
 })
  // translate
 
  $('.brand-le').click(function(){
     if(oLeft){
        $('.brand-ul').css('transform','translateX(-1000px)')   
        oLeft = false
     } else if( oLeft == false){
    
        $('.brand-ul').css('transform','translateX(0px)')   
        oLeft = true
     }
        
  })
  $('.brand-ri').click(function(){
    if(oLeft){
        $('.brand-ul').css('transform','translateX(-1000px)')   
        oLeft = false
     } else if( oLeft == false){
    
        $('.brand-ul').css('transform','translateX(0px)')   
        oLeft = true
     }

  })
 
 // 楼层导航
 $(window).scroll(function(){
  var louhight = $(window).height()
  var  top = $(window).scrollTop()
  
   if(top > 400){
    $('.leftdirectory').removeClass('hi')
       $('.leftdirectory').addClass('sh')
   }else{
    $('.leftdirectory').removeClass('sh')
       $('.leftdirectory').addClass('hi')
   }
   
   // 定位楼层导航  
   
     $('.mainlist .guide').each(function(index){
                                    
       if(top +louhight - $(this).offset().top>louhight/2  ){ 
           $('.leftlist .directory-left').removeClass('index')
           $('.leftlist .directory-left').eq(index) .addClass('index')
       }
   })
      })
     //  回到顶部
      $('.toTop').click(function(){
        $("body,html").animate({
            "scrollTop": 0
        }, 500)
       })
               // 点击
    $('.leftlist .directory-left:not(.toTop)').click(function(){
      var oH = $('.mainlist .guide').eq($(this).index()).offset().top -100
      console.log(oH);
      $("body,html").animate({
        "scrollTop": oH
    }, 500)
  })
     // 浏览记录 点击切换
     $('.record-li1').mouseenter(function(){
      $('.record-left').click()
     })
     $('.record-li2').mouseenter(function(){
      $('.record-right').click()
     })
     $('.record-right').click(function(){
             $('.record-ul').css('transform','translateX(-1200px)')
             $('.record-li1').removeClass('record-active')
             $('.record-li2').addClass('record-active')
           
     })
     $('.record-left').click(function(){
      $('.record-ul').css('transform','translateX(0px)')
      $('.record-li2').removeClass('record-active')
      $('.record-li1').addClass('record-active')
      })
    $('.record-bd').hover(function(){
      $('.record-left').show()
      $('.record-right').show()
    },function(){
      $('.record-left').hide()
      $('.record-right').hide()
    })
    })
  
 
