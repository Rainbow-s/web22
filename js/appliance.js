// 网站导航二级导航移入事件
$(".navigation,.nav-none").mouseenter(function() {
    $(".nav-none").css("display", "block");
    $(".navigation").addClass("active")
});
// 移出事件
$(".navigation,.nav-none").mouseleave(function() {
    $(".nav-none").css("display", "none");
    $(".navigation").removeClass("active")
});
// 购物车二级导航鼠标移入事件
$(".shopCart,.prompt").mouseenter(function() {
    $(".prompt").css("display", "block");
    $(".shopCart").addClass("carts")
});
// 移出隐藏
$(".shopCart,.prompt").mouseleave(function() {
    $(".prompt").css("display", "none");
    $(".shopCart").removeClass("carts");
});
// 导航栏二级导航
// 显示二级导航
$(".cay-item").mouseenter(function() {
        // 得到索引
        var index = $(this).index()
            // 设置深蓝色背景
        $(this).addClass("skyblue");
        // 设置移入显示
        $(".triangle").eq(index).css("display", "block");
        $(".item-modular").eq(index).css("display", "block");
        // 判定标题的背景颜色
        if ($(this).index() == 0) {
            $(".cay-type").addClass("blue");
        } else {
            $(".cay-type").removeClass("blue");
        }
    })
    // 移出隐藏二级导航
$(".cay-item").mouseleave(function() {
        // 得到索引
        var index = $(this).index()
        $(this).removeClass("skyblue")
            // 设置移出隐藏
        $(".triangle").eq(index).css("display", "none");
        $(".item-modular").eq(index).css("display", "none");
        // 判定如果是第一个则去除浅蓝色背景
        if (index == 0) {
            $(".cay-type").removeClass("blue");
        }
    })
    // banner轮播图
    // 设置变量
var flag = 0;
// 设置定时器
var timer = setInterval(function() {
        Star()
    }, 3000)
    // 创建函数封装公共样式
function Star() {
    flag++;
    if (flag == $(".images li").length) {
        flag = 0
    }
    // 设置显示的小圆点和显示的img
    $(".images li").eq(flag).stop().fadeIn(500).siblings("li").fadeOut(500);
    $(".circles").eq(flag).addClass("on").siblings("li").removeClass("on")
}
// 清除定时器
$(".banner").mouseenter(function() {
        clearInterval(timer)
    })
    // 设置离开事件
$(".banner").mouseleave(function() {
        timer = setInterval(function() {
            Star()
        }, 3000)
    })
    // 设置小圆点事件
$(".circles").mouseover(function() {
        var index = $(this).index();
        flag = index;
        // 设置显示的img和小圆点
        $(this).addClass("on").siblings("li").removeClass("on");
        $(".images li").eq(index).stop().fadeIn(500).siblings("li").fadeOut(500);
    })
    // 热门推荐tab切换
    // 标题鼠标移入切换颜色
$(".extra ul li").mouseenter(function() {
        var index = $(this).index();
        $(this).addClass("blod").siblings("li").removeClass("blod");
        // 设置ul显示
        $(".release").eq(index).stop().fadeIn(500).siblings("ul").fadeOut(500);
    })
    // 设置查看详情显示
$(".new-goods").mouseenter(function() {
        $(this).find(".details").css("visibility", "visible");
    })
    // 设置移出隐藏
$(".new-goods").mouseleave(function() {
        $(this).find(".details").css("visibility", "hidden");
    })
    // 设置主体内容移入移出事件
$(".title li").mouseenter(function() {
        var index = $(this).index();
        $(this).addClass("blueadd").siblings("li").removeClass("blueadd");
        $(this).parents(".catetop").find(".goods-list").eq(index).fadeIn(500).siblings("ul").fadeOut(500);
    })
    // 随手购左右移动
var num = 0;
// 设置右移动点击事件
$(".next").click(function() {
        num++;
        // 判定num的值
        if (num == $(".long-c li").size()) {
            num = $(".long-c li").size() - 1
        }
        move()
    })
    // ul移动的距离和改变长圆点
function move() {
    var stmp = -num * 1200 + "px";
    $(".move").animate({
        left: stmp
    }, 500)
    $(".long-c li").eq(num).addClass("long").siblings("li").removeClass("long")
}
// 设置左移动点击事件
$(".prev").click(function() {
        num--;
        if (num < 0) {
            num = 0
        }
        move()
    })
    // 设置长圆点移动
$(".long-c li").mouseenter(function() {
        var index = $(this).index();
        num = index;
        move()
    })
    // 侧导航显示
    // 设置空数组装标签
var arr = [];
$(".s-move").each(function(index) {
        arr.push($(this))
    })
    // 设置索引变量
var oIndex;
$(window).scroll(function() {
        var oScrollTop = $(window).scrollTop()
        var oTop = $(".s-move").eq(0).offset().top;
        // 判定显示位置
        if (oScrollTop > oTop - 110) {
            $("aside").css("transform", "scale(1)")
        } else {
            $("aside").css("transform", "scale(0)")
        }
        // 侧导航栏变色
        var screen = $(window).height();
        arr.forEach(function(value, index) {
                if (screen + oScrollTop - $(value).offset().top > screen / 2) {
                    oIndex = index
                }
            })
            // 侧导航变色
        $(".lift-item").eq(oIndex).addClass("move-blue").siblings(".lift-item").removeClass("move-blue")

    })
    // 设置点击移动
$(".lift-item:not(.back)").click(function() {
        // 获取索引
        var index = $(this).index()

        // 得到移动距离
        var distance = $(arr[index]).offset().top - 30 + "px";
        // 设置移动
        $("body,html").animate({
            scrollTop: distance
        }, 500)
    })
    // 设置回到顶部
$(".back").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 500)
    })
    // 右侧导航
$(".right-black").hover(function() {
        // 设置显示和动画
        $(this).find(".right-move").css({
            display: "block"
        }).animate({
            left: "-92px"
        }, 500)
        $(this).find(".black-arrow").css("display", "block").animate({
            right: "35px"
        }, 500)
    }, function() {
        // 设置移出恢复原状
        $(this).find(".right-move").stop(true, true).css({
            display: "none",
            left: "-121px"
        })
        $(this).find(".black-arrow").stop(true, true).css({
            display: "none",
            right: "64px"
        })
    })
    // 右侧回到顶部出现
$(window).scroll(function() {
        var bannerTop = $(".banner").offset().top;
        if ($(window).scrollTop() > bannerTop) {
            $(".black-none").css("display", "block")
            $(".people").css("height", "76px")
        } else {
            $(".black-none").css("display", "none")
            $(".people").css("height", "38px")
        }
    })
    // 地理位置滚动

// 设置移入事件
$(".pos-search a").mouseover(function() {
        // 存储距离
        var oTop = [];
        $(".pos-city ul li").each(function() {
                oTop.push($(this).position().top)
            })
            // 获得索引
        var index = $(this).index();
        var stemp = oTop[index];
        // 设置ul最大距离
        if (stemp > 1700) {
            stemp = 1700;
        }
        // 得到小方块移动的距离
        var Stemp = stemp / $(".pos-city ul").height() * $(".scroll").height();
        // 判定Stemp的值
        if (Stemp > 119.8) {
            Stemp = 119.8
        }
        // 设置移动
        $(".pos-city ul").stop(true, true).animate({
            top: -stemp + "px"
        }, 200)
        $(".scrollBar").stop(true, true).animate({
            top: Stemp + "px"
        }, 200)
    })
    // 设置拖拽事件
$(".scrollBar").mousedown(function(e) {
        // 去除浏览器默认
        window.getSelection ? window.getSelection().removeAllRanges() : document.section.empty();
        // 得到最大距离
        var oclick = e.clientY - $(this).offset().top;
        var fatherTop = $(".scroll").offset().top;
        // 设置鼠标移动事件
        $(window).mousemove(function(e) {
            var moveTop = e.clientY - oclick - fatherTop;
            // 设置移动最大值和最小值
            if (moveTop < 0) {
                moveTop = 0
            } else if (moveTop > 119.8) {
                moveTop = 119.8
            }
            // 得到ul移动的值
            var oUl = -moveTop / $(".scroll").height() * $(".pos-city ul").height()
            $(".scrollBar").css("top", moveTop + "px")
            $(".pos-city ul").css("top", oUl + "px")
        })
    })
    // 鼠标弹起清除拖拽
$(window).mouseup(function() {
        $(window).off("mousemove")
    })
    // 设置位置移入移出
$(".position,.pos-none").hover(function() {
        // 设置移入样式
        $(".position").css({
            backgroundColor: "#fff",
            borderColor: "#d2d2d2",
            borderBottom: "1px solid white"
        })
        $(".pos-none").css("display", "block")
            // 设置移出样式
    }, function() {
        $(".position").css({
            backgroundColor: "#eee",
            borderColor: "#eee",
            borderBottom: "1px solid white"
        })
        $(".pos-none").css("display", "none")
    })
    // 设置qq登录复选框选定
$("#rember").click(function() {
        if ($(this).is(":checked")) {
            $(".label").css("background", "url(../images/checked_12x12.png) 0 2px no-repeat")
        } else {
            $(".label").css("background", "url(../images/checkbox_12x12.png) 0 2px no-repeat")
        }
    })
    // 蒙版显示
    // 背景显示
$(".opacity-block").click(function() {
        $(".qq").css("display", "block")
        $(".opacity-bg").css("display", "block")
    })
    // 背景隐藏
$(".opacity-bg-none").click(function() {
        $(".qq").css("display", "none")
        $(".opacity-bg").css("display", "none")
    })
    // 购物车内容显示
var isNone = 0;
$(".shop-none").click(function() {
        if (isNone == 0) {
            // 设置宽度变大
            $(".r-aside").animate({
                    width: "320px"
                })
                // 设置点击后样式
            $(".shop-none span").css({
                backgroundColor: "white",
                color: "red"
            })
            $(".shop-none").css({
                    backgroundColor: "red",
                })
                // 设置变量的值
            isNone = 1;
        } else {
            // 设置恢复宽度
            $(".r-aside").animate({
                    width: "40px"
                })
                // 设置变量的值
            isNone = 0;
            $(".shop-none span").css({
                backgroundColor: "red",
                color: "white"
            })
            $(".shop-none").css({
                backgroundColor: "black",
            })
        }
    })
    // 叉号点击事件
$(".link-close").click(function() {
        $(".r-aside").animate({
                width: "40px"
            })
            // 设置变量的值
        isNone = 0;
        // 设置样式
        $(".shop-none span").css({
            backgroundColor: "red",
            color: "white"
        })
        $(".shop-none").css({
            backgroundColor: "black",
        })
    })
    // 邮箱出现
var moveBottom = 0;
$(".email-none").click(function() {
    // 判定是出现还是消失
    if (moveBottom == 0) {
        $(".email-show").animate({
            bottom: 0
        })
        moveBottom = 1;
    } else {
        $(".email-show").animate({
            bottom: "-60px"
        })
        moveBottom = 0;
    }
})