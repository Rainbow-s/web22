$(function() {
    //hover(鼠标经过回调函数,鼠标离开回调函数)
    $(".item").hover(function() {
            $(this).children("div").show()
            $(this).children("div").animate({ left: "+=30px" }, 300)
        }, function() {
            $(this).children("div").hide()
            $(this).children("div").animate({ left: "-=30px" }, 0)
        })
        //点击购物车，出现隐藏购物篮
    var num = 1;
    $(".item-2").click(function() {
            if (num == 1) {
                $(".aside").animate({ right: "+=280px" }, 300)
                $(".hide-store").show(300)
                num = 2
            } else if (num == 2) {
                $(".hide-store").hide(300)
                $(".aside").animate({ right: "-=280px" }, 300)
                num = 1
            }
        })
        //点击x号关闭购物篮
    $(".close-btn").click(function() {
            $(".hide-store").hide(300)
            $(".aside").animate({ right: "-=280px" }, 300)
            num = 1
        })
        // 返回顶部按钮显示
    $(window).scroll(function() {
            var oSrcollTop = $(window).scrollTop()
            console.log(oSrcollTop);
            // X改为自己的页面高度
            var X = 300;
            if (oSrcollTop > X) {
                $(".item-10").fadeIn(300);

                // $(".item-9").animate({ bottom: "-90px" }, 100)
                // $(".item-10").animate({ bottom: "-140px" }, 100)
            } else if (oSrcollTop < 1) {
                $(".item-10").fadeOut(300);

                // $(".item-9").animate({ bottom: "-140px" }, 100)
                // $(".item-10").animate({ bottom: "-190px" }, 100)
            }
        })
        // 点击返回顶部
    $(".item-10").click(function() {
        $("body,html").animate({
            "scrollTop": 0
        }, 1000)
    })
})