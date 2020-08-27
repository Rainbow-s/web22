$(function() {
    // 上下变高按钮
    $(".choose-open").click(function() {
        $(".brand-items").toggleClass("active");
        $(".selector").toggleClass("active");
        $(".choose-open .iconfont").toggleClass("icon-shang");
    });
    // 多选按钮
    $(".choose-more").click(function() {
        console.log(1);
        $(".brand-items").toggle();
        $(" .choose-more .iconfont").toggleClass("icon-plus-minus");
        $(".brand-items-hide").fadeToggle(0);
        if ($(".choose-more .iconfont").hasClass("icon-plus-minus")) {
            $(".choose-more span").text("收起");
        } else {
            $(".choose-more span").text("多选");
        }
        $(".selector").toggleClass("active");
    });
    // A-Z改变类名
    $(".all_a-z li").mouseover(function() {
        var index = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".zimu-list .get-more").eq(index).fadeIn().siblings("ul").fadeOut();
    });

    // 勾选品牌
    $(".get-more li ").click(function() {
        var index = $(this).index();
        console.log(index);
        $(this).find(".choose_ico").toggleClass("active");
        // 确定键出现
        if ($(".get-more li").find(".choose_ico").hasClass("active")) {
            $(".yes-no .yes-btn").fadeIn();
        } else {
            $(".yes-no .yes-btn").fadeOut();
        }
    });

    // 价格区间
    console.log($(".price-min"))
    $(".price-min").focus(function() {
        console.log("==================================================")
        $(".fprice .ok-no").fadeIn(300);
    })
    var ssr = Array.from($(".items .g-item"));
    console.log(ssr);
    // 确定搜索价格区间的商品
    $(".oko.no").click(function() {
            // 装g-item
            var arr2 = [];
            // 装搜出来的价格区间的货物的索引
            var arr3 = [];
            var arr4 = [];
            $(".g-item").each(function(index, value) {
                    arr2.push(value);
                })
                // $(".items").html("");
            for (var i = 0; i < arr2.length; i++) {
                var price = arr2[i].dataset.price;
                // 找出不符合的删除
                if (price >= $(".price-min").val() && price <= $(".price-max").val()) {
                    arr3.push(i);
                }
            }
            console.log(arr3);
            for (var j = 0; j < arr3.length; j++) {
                // ssr.splice(arr3[j], 1);
                arr4.push(ssr[arr3[j]]);
            }
            console.log(arr4);
            $(".goods-list-wrap .items").html("");
            for (var k = 0; k < arr4.length; k++) {
                $(".goods-list-wrap .items").append(arr4[k]);
            }
            $(".fprice .ok-no").fadeOut(300);
            $(".flex").click();
        })
        // 点击清除，清除输入框的内容
    $(".oko.ok").click(function() {
        $(".price-min").val("");
        $(".price-max").val("");
    })

    // 点击取消键，执行收起 ，收起更多品牌
    $(".yes-no .no-btn").click(function() {
        $(".choose-more").click();
    });
    // 包邮，自营商品，仅显示有货点击勾选
    $(".ui-label").click(function() {
        $(this).toggleClass("active");
    });

    //   切换小图片(g-img  和 g-min-img)
    $(".g-min-img .minimg").mouseover(function() {
        // 小图片（this此处指向li）
        var minimg = $(this).find("img");
        // 找到大图片（找到自己的父亲上一个兄弟里面的img）
        var img = $(this).parents(".g-min-img").prev(".g-img").find("img");
        // 小图片的路径
        var minsrc = minimg.attr("src");
        // 设置大图片的路径
        img.attr("src", minsrc)
    });

    // 点击↑↓互换
    $(".filter-sort a").click(function() {
            if ($(this).siblings('a').hasClass("active")) {
                $(this).siblings('a').removeClass("active");
            }
            $(this).find("i").toggleClass("icon-lower");
            $(this).siblings("a").find("i").removeClass("icon-lower");
            $(this).siblings("a").find("i").addClass("icon-upper");
            $(this).toggleClass("active");
        })
        // 默认
    $(".filter-sort .normal").click(function() {
            location.reload();
        })
        // 价格
    var arr = [];
    var num = 0;
    $(".filter-sort .money").click(function() {
        num++;
        // 遍历把.g-item加入数组
        $(".g-item").each(function(index, value) {
                arr.push(value);
            })
            // 获取自定义价格属性

        // 原本的想法：把价格排序放在一个数组里，然后按照顺序放进一个对象中，data-price：xxx;
        // 然后根据属性选择器找到那个元素，给与他css添加对应的key的order达到排序效果。 

        // 修改：对比每个元素的data-num属性排序，然后决定其元素的排序，
        // 价格越高排在后面，然后添加按照索引给元素添加相应的order，达到更改顺序
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (Number(arr[i].dataset.price) > Number(arr[j].dataset.price)) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
        }
        console.log(arr);
        if (num == 1) {
            var arr1 = arr.reverse();
            for (var i = 0; i < arr1.length; i++) {
                arr1[i].style.order = i;
            }
        }
        if (num == 2) {
            for (var i = 0; i < arr.length; i++) {
                arr[i].style.order = i;
            }
            num = 0;
        }

    });
    console.log("========================");
    // 点击flex按钮隐藏广告增加左边内容宽
    var flag = 0;
    $(".flex").click(function() {
        flag++;
        if (flag == 1) {
            $(this).text("<");
            $(".news-wrap").fadeOut(300);
            $(".news").css("height", "100px");
            // $(".news").css("display", "none");
            $(".guessgoods").css("height", "1750px");
            flag = 2;
        }
        if (flag == 3) {
            $(this).text(">");
            $(".news-wrap").fadeIn(600);
            $(".news").css("height", "1822px");
            // $(".news").css("display", "block");
            $(".guessgoods").css("height", "2198px");


            flag = 0;
        }
        $(this).toggleClass("on");
        $(".goods-list .items").toggleClass("active");
        $(".news-wrap").toggleClass("on");
        // $(".g-view").toggleClass("active-h");

    });
    // 购物车
    $(".shopcar").mouseover(function() {
        $(".hidden").css("display", "block");
    })
    $(".shopcar").mouseout(function() {
        $(".hidden").css("display", "none");
    })
});