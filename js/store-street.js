$(function(){
    //hover(鼠标经过回调函数,鼠标离开回调函数)
    $(".item").hover(function () {
        $(this).children("div").show()
        $(this).children("div").animate({ left: "+=30px" }, 300)
    }, function () {
        $(this).children("div").hide()
        $(this).children("div").animate({ left: "-=30px" }, 0)
    })
    //点击购物车，出现隐藏购物篮
    var num=1;
    $(".item-2").click(function(){
        if (num == 1) {
            $(".aside").animate({right:"+=280px"},300)
            $(".hide-store").show(300)
            num = 2
        } else if (num == 2) {
            $(".hide-store").hide(300)
            $(".aside").animate({right:"-=280px"},300)
            num = 1
        } 
    })
    //点击x号关闭购物篮
    $(".close-btn").click(function(){
        $(".hide-store").hide(300)
        $(".aside").animate({right:"-=280px"},300)
        num=1
    })
    // 返回顶部按钮显示
    $(window).scroll(function () {
        var oSrcollTop = $(window).scrollTop()
        console.log(oSrcollTop);
        // 改为自己的页面高度
        if (oSrcollTop > 2200) {
            $(".item-10").css("display","block")
            $(".item-9").animate({bottom:"-90px"},100)
            $(".item-10").animate({bottom:"-140px"},100)
        } else if(oSrcollTop<1){
            $(".item-9").animate({bottom:"-140px"},100)
            $(".item-10").animate({bottom:"-190px"},100)
            $(".item-10").css("display","none")
        }
    })
    // 点击返回顶部
    $(".item-10").click(function () {
        $("body,html").animate({
            "scrollTop": 0
        }, 1000)
    })
    //黑色导航栏显现
    $(".classify").hover(function(){
        $(".all-goods").show()
    },function(){
        $(".all-goods").hide()
    })
    $(".all-goods").hover(function(){
        $(".all-goods").show()
    },function(){
        $(".all-goods").hide()
    })

    $(".search input:eq('0')").focus(function(){
        var text_value=$(this).val();
        if(text_value=="Five Plus"){
            $(this).val("");
        }
    })
    $(".search input:eq('0')").blur(function(){
        var text_value=$(this).val();
        if(text_value==""){
            $(this).val("Five Plus");
        }
    })

    //排序点击事件
    
    var sum1=1;
    $(".box").eq(0).click(function(){
        if (sum1 == 1) {
            $(this).css({"border-color":"#f42424","color":"#f42424"})
            $(".iconfont").eq(10).removeClass("icon-up")
            $(".iconfont").eq(10).addClass("icon-down1")
            sum1 = 2
        } else if (sum1 == 2) {
            $(this).css({"border-color":"#d2d2d2","color":"#8c8c8c"})
            $(".iconfont").eq(10).removeClass("icon-down1")
            $(".iconfont").eq(10).addClass("icon-up")
            sum1 = 1
        } 
    })

    var sum2=1;
    $(".box").eq(1).click(function(){
        if (sum2 == 1) {
            $(this).css({"border-color":"#f42424","color":"#f42424"})
            $(".iconfont").eq(11).removeClass("icon-up")
            $(".iconfont").eq(11).addClass("icon-down1")
            sum2 = 2
        } else if (sum2 == 2) {
            $(this).css({"border-color":"#d2d2d2","color":"#8c8c8c"})
            $(".iconfont").eq(11).removeClass("icon-down1")
            $(".iconfont").eq(11).addClass("icon-up")
            sum2 = 1
        } 
    })

    var sum3=1;
    $(".box").eq(2).click(function(){
        if (sum3 == 1) {
            $(this).css({"border-color":"#f42424","color":"#f42424"})
            $(".iconfont").eq(12).removeClass("icon-up")
            $(".iconfont").eq(12).addClass("icon-down1")
            sum3 = 2
        } else if (sum3 == 2) {
            $(this).css({"border-color":"#d2d2d2","color":"#8c8c8c"})
            $(".iconfont").eq(12).removeClass("icon-down1")
            $(".iconfont").eq(12).addClass("icon-up")
            sum3 = 1
        } 
    })

    // 点击爱心收藏

    var flag=1
    $(".info span").click(function(){
        if(flag==1){
            $(this).removeClass("icon-aixin")
            $(this).addClass("icon-aixin_shixin")
            flag=2
        }else if(flag==2){
            $(this).removeClass("icon-aixin_shixin")
            $(this).addClass("icon-aixin")
            flag=1
        }
    })
})