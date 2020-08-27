$(function() {
    // 地图导航显示与隐藏
    $(".site").hover(function() {
        $(".map-nav").show()
        $(".site-title").css({
            "border": "1px solid #d2d2d2",
            "border-bottom": "2px solid #fff",
            "background": " #fff"
        })
    }, function() {
        $(".map-nav").hide();
        $(".site-title").css({
            "border": "1px solid #eee",
            "background": "#eee"
        })
    })

    // 地图导航
    $(".map-midden a").mouseover(function() {
        var index = $(this).index()
        var oUlTop = $(".map-scroll li").eq(index).position().top;

        $(".map-scroll ul").animate({
            top: -oUlTop
        }, 100)
        $(".map-slider").animate({
            top: (120 * oUlTop) / 1700
        }, 100)
    })

    // 地图侧边滚动条
    $(".map-slider").mousedown(function() {
        $(".map-nav").mousemove(function(e) {
            if (e.pageY > 228) {
                e.pageY = 228
            } else if (e.pageY < 108) {
                e.pageY = 108
            }
            var pTop = e.pageY - 108;
            $(".map-slider").css({
                top: pTop
            })
            $(".map-scroll ul").animate({
                top: -(1700 * pTop) / 120
            }, 5)
            $(this).mouseup(function() {
                $(".map-nav").off()

            })
        })
    })





    // 导航栏
    $(".categorys-items li").hover(function() {
        $(this).css("background", "#E02B61");
        $(".categorys-content").show();
        $(".categorys-c-lists").eq($(this).index()).show()
    }, function() {
        $(this).css("background", "");
        $(".categorys-c-lists").eq($(this).index()).hide()
        $(".categorys-content").hide();
    })
    $(".categorys-c-lists").hover(function() {
            $(".categorys-content").show();
            $(this).show();
            $(".categorys-items li").eq($(this).index()).css("background", "#EE356C");
        }, function() {
            $(".categorys-content").hide();
            $(this).hide();
            $(".categorys-items li").eq($(this).index()).css("background", "");
        })
        // 轮播图


    // 定时轮播
    function banner() {
        var index = $('.banner-lists  .active').index() + 1;
        if (index > $('.banner-lists  li').size() - 1) {
            index = 0;
        }
        $(".banner-imgs li").eq(index).fadeIn(400).siblings().fadeOut()
        $('.banner-lists  li').eq(index).addClass("active").siblings("li").removeClass("active");
    }
    // hover时暂停轮播
    var timer = setInterval(function() {
        banner();
    }, 3000)
    $(".banner-imgs").hover(function() {
        clearInterval(timer)
    }, function() {
        timer = setInterval(function() {
            banner();
        }, 3000)
    })

    // 焦点轮播
    $(".banner-lists li").mouseover(function() {
        clearInterval(timer);
        var index = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".banner-imgs li").eq(index).fadeIn(400).siblings().fadeOut()
        timer = setInterval(function() {
            banner();
        }, 3000)
    })

    // 女装右导航
    $(" .floor-1 .fl-nav li").hover(function() {
            $(this).addClass("fl-active").siblings("li").removeClass("fl-active");
            $(".floor-1 .right-bottom ul").eq($(this).index()).fadeIn(300).siblings("ul").fadeOut(200)
        })
        // 男装右导航
    $(" .floor-2 .fl-nav li").hover(function() {
            $(this).addClass("fl-active").siblings("li").removeClass("fl-active");
            $(".floor-2 .right-bottom ul").eq($(this).index()).fadeIn(300).siblings("ul").fadeOut(200)
        })
        // 运动配饰右导航
    $(" .floor-3 .fl-nav li").hover(function() {
            $(this).addClass("fl-active").siblings("li").removeClass("fl-active");
            $(".floor-3 .right-bottom ul").eq($(this).index()).fadeIn(300).siblings("ul").fadeOut(200)
        })
        // 内衣右导航
    $(" .floor-4 .fl-nav li").hover(function() {
            $(this).addClass("fl-active").siblings("li").removeClass("fl-active");
            $(".floor-4 .right-bottom ul").eq($(this).index()).fadeIn(300).siblings("ul").fadeOut(200)
        })
        // 运动户外右导航
    $(" .floor-5 .fl-nav li").hover(function() {
        $(this).addClass("fl-active").siblings("li").removeClass("fl-active");
        $(".floor-5 .right-bottom ul").eq($(this).index()).fadeIn(300).siblings("ul").fadeOut(200)
    })

    // 随手购banner图
    // 左右按钮出现
    $(".atwill-banner").hover(function() {
        $(".prev,.next").fadeIn()
    }, function() {
        $(".prev,.next").fadeOut()
    })

    // 焦点轮播
    $(".footer-lists li").mouseover(function() {
        $(this).addClass('on').siblings('li').removeClass('on');
        var index = $(this).index();
        switch (index) {
            case 0:
                $(".f-banner-lists").animate({
                    left: -0 * 1200 + 'px'
                }, 400)
                break;
            case 1:
                $(".f-banner-lists").animate({
                    left: -1 * 1200 + 'px'
                }, 400)
                break;
            case 2:
                $(".f-banner-lists").animate({
                    left: -2 * 1200 + 'px'
                }, 400)
                break;
        }
    })

    // 左按钮轮播
    $(".prev").click(function() {
            $(".next").css("color", "#fff")
            var index = $(".footer-lists li.on").index()
            index--;
            if (index <= 0) {
                index = 0;
                $(this).css("color", "#ccc")
            }
            $(".f-banner-lists").animate({
                left: -index * 1200 + 'px'
            }, 400)
            $(".footer-lists li").eq(index).addClass('on').siblings('li').removeClass('on');
        })
        //右按钮轮播
    $(".next").click(function() {
        $(".prev").css("color", "#fff")
        var index = $(".footer-lists li.on").index()
        index++;
        if (index >= 2) {
            index = 2;
            $(this).css("color", "#ccc")
        }
        $(".f-banner-lists").animate({
            left: -index * 1200 + 'px'
        }, 400)
        $(".footer-lists li").eq(index).addClass('on').siblings('li').removeClass('on');
    })

    // 左侧边栏的出现
    $(window).scroll(function() {

        // 网页被卷进去的距离
        var oScrollTop = $("html,body").scrollTop();

        if (oScrollTop >= 600) {
            $('.l-aside').css("transform", " scale(1) ")
        } else {
            $('.l-aside').css("transform", " scale(0) ")
        }

        // 侧栏单个图标背景随内容变化
        var wH = $(window).height();
        $(".floor").each(function(index) {
            if (wH + oScrollTop - $(this).offset().top > wH / 2) {
                $(".l-aside li").removeClass("l-aside-on")
                $(".l-aside li").eq(index).addClass("l-aside-on")
            }
        })
    })

    // 楼层导航
    $(".l-aside li").click(function() {
        var index = $(this).index();
        var H = $(".floor").eq(index).offset().top - 28;
        if (index == 0) {
            $("html,body").animate({
                "scrollTop": 600
            })
        } else {
            $("html,body").animate({
                "scrollTop": H
            })
        }
    })

    // 回到顶部
    $(".h-top").click(function() {
        $("html,body").animate({
            "scrollTop": 0
        })
    })

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
            var oScrollTop = $("html,body").scrollTop();

            if (oScrollTop > 150) {
                $(".item-9").animate({ bottom: "-90px" }, 0)
                $(".item-10").animate({ bottom: "-140px" }, 0)
            } else {
                $(".item-9").animate({ bottom: "-140px" }, 0)
                $(".item-10").animate({ bottom: "-190px" }, 0)
            }
        })
        // 点击返回顶部
    $(".item-10").click(function() {
        $("body,html").animate({
            "scrollTop": 0
        })
    })

    // qq弹出框
    $(".g-banner .item-1").click(function() {
        $(".mask").show(0)
    })
    $(".g-banner .item-3").click(function() {
        $(".mask").show(0)
    })
    $(".g-banner .item-4").click(function() {
        $(".mask").show(0)
    })
    $(".g-banner .item-5").click(function() {
        $(".mask").show(0)
    })
    $(".g-banner .item-7").click(function() {
        $(".mask").show(0)
    })
    $(".q-title .icon-x").click(function() {
        $(".mask").hide(0)
    })
})