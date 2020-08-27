//点击叉号 关闭广告
$('.cha').click(function() {
	$('.ad').fadeOut(200)
})
//字母鼠标移入事件
$('.h_letter a').each(function(index, item) {
	$(this).mouseover(function() {
		var that = $(this);
		//margintop的值
		var oh = 0;
		//		$('.h_ul').css('margin-top',0)
		$('.h_ul li').each(function() {
			ah += $(this).height();
			if($(this).data('name') == that.data('letter')) {
				$(this).prevAll().each(function() {
					oh += $(this).height()
				})
			}
			$('.h_ul').stop().animate({
				'marginTop': -oh + 'px'
			}, 500)
			//可移动距离
			var ah = $('.h_ul').height() - $('.h_ul li:last').height();
			//判断可滑动高度
			var ch = $('.h_bar').height() - $('.h_citybar').height();
			//要移动的高度
			var yh = oh / ah * ch;
			$('.h_citybar').stop().animate({
				top: yh + 'px'
			}, 500)
		})
	})
})
//滑动滚动条
$('.h_citybar').mousedown(function(e) {
	//获取鼠标刚点下的位置
	var ey = e.pageY;

	$('.h_citybar').mousemove(function(e) {
		//获取剪头的位置
		var mh = e.pageY - $('.h_bar').offset().top - $('.h_citybar').height() / 2;
		//获取最大移动距离
		var maxh = $('.h_bar').height() - $('.h_citybar').height();
		if(mh <= 0) {
			mh = 0;
		} else if(mh >= maxh) {
			mh = maxh;
		}
		//判断可滑动高度 120
		var ch = $('.h_bar').height() - $('.h_citybar').height();
		//可移动距离
		var ah = $('.h_ul').height() - $('.h_ul li:last').height();
		//获取比例
		var bili = mh / ch * ah;
		$('.h_ul').stop().animate({
			'marginTop': -bili + 'px'
		}, 200)

		$('.h_citybar').css({
			'top': mh
		})
	})
	//鼠标弹起 鼠标移动事件清空
	$('.h_citybar').mouseup(function(e) {
		$('.h_citybar').off('mousemove')
	})
	//鼠标离开时，清空移动事件
	$('.h_citybar').mouseleave(function(e) {
		$('.h_citybar').off('mousemove')
	})

})

//鼠标移入郑州市，添加类名
$('.h_citychoice').hover(function() {
	$('.h_citychoice').addClass('h_hover')
}, function() {
	$('.h_citychoice').removeClass('h_hover');
	$('.h_ul').css('margin-top', 0);
	$('.h_citybar').css('top', 0);
})

//滚轮滚动事件
$('.h_alllist').bind('mousewheel', function(e) {
	//最大位移
	var maxh = $('.h_ul').height() - $('.h_ul li:last').height();
	//	当前top
	var top = Number($('.h_ul').css('margin-top').slice(0, -2));
	//判断可滑动高度 120
	var ch = $('.h_bar').height() - $('.h_citybar').height();
	//可移动距离
	var ah = $('.h_ul').height() - $('.h_ul li:last').height();
	//获取比例
	var bili = -top / ah * ch;

	$('.h_citybar').css({
		'top': bili
	})

	//	向上滚动
	if(e.originalEvent.wheelDelta < 0) {
		if(top <= 0 && top > -maxh) {
			top -= 20;
			$('.h_ul').css('margin-top', top + 'px');

		} else if(top <= -maxh) {
			top = -maxh;
			$('.h_ul').css('margin-top', top + 'px');
			return
		}
	} else if(e.originalEvent.wheelDelta > 0) {
		if(top < 0 && top >= -maxh) {
			top += 20;
			$('.h_ul').css('margin-top', top + 'px')
		} else if(top >= 0) {
			top = 0;
			$('.h_ul').css('margin-top', top + 'px');
			return
		}
	}

})

$('.h_navi').hover(function() {
	$('.h_navi').addClass('h_hover');
}, function() {
	$('.h_navi').removeClass('h_hover')
})

//搜索框 获取焦点和失去焦点
$('.h_search .h_intext').focus(function() {
	$(this).val('');
	$(this).css('color', 'rgb(102，102，102)');
})
$('.h_search .h_intext').on('blur', function() {
	$(this).val('内衣');
	$(this).css('color', 'rgb(153, 153, 153)');
})
//表单提交清除默认事件，禁止跳转
$('.h_form').on('submit', function(e) {
	e.preventDefault()
})
//hover购物车
$('.h_shop').hover(function() {
	$('.h_shop').addClass('h_hover');
}, function() {
	$('.h_shop').removeClass('h_hover');
})
//禁止拖拽文字
$(document).on('selectstart', function() {
	event.preventDefault();
})
$('img').bind('dragstart', function() {
	return false;
})
window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

//点击显示二级导航

$('.c_item').mouseenter(function() {
	$(this).siblings('.c_item').find('.c_itemlayer').removeClass('reveal');
	$(this).find('.c_itemlayer').addClass('reveal');
})
$('.c_item').mouseleave(function() {
	$(this).find('.c_itemlayer').removeClass('reveal');
})

//轮播图
var length = $('.circles li').length;
var index_ = 0;
var bool = true;

//点击小圆点
$('.circles li').click(function() {
	if(bool){
		index_ = $(this).index();
	    carousel()	    
	}
	bool = false;
	
})

function carousel() {
//	clearInterval(inter)
	$('.circles li').eq(index_).addClass('on').siblings().removeClass('on');
	$('.carousel_item').eq(index_).fadeIn(300).siblings().fadeOut(600,function(){
		bool = true
	})
}
//设置轮播
var inter = setInterval(function() {
	index_++;
	if(index_ == length) {
		index_ = 0;
	}
	carousel()
}, 3000)

//鼠标移入停止轮播
$('.carousel').on('mouseenter', function() {
	clearInterval(inter)
})
$('.carousel').on('mouseleave', function() {
	inter = setInterval(function() {
		index_++;
		if(index_ == length) {
			index_ = 0;
		}
		carousel()
	}, 3000)
})

//公告促销
$('.tit a').on('mouseenter', function() {
	$(this).addClass('tit_on').siblings().removeClass('tit_on');
	$('.con ul').eq($(this).index()).show().siblings().hide()
})

//好货大聚会轮播图
//下一个
$('.next').click(function() {
	$('.carouse_imgs ul').animate({
		left: '-238px'
	}, 800, function() {
		$('.carouse_imgs ul li:first').appendTo($('.carouse_imgs ul'));
		$('.carouse_imgs ul').css('left', 0);
	})
})
//上一个
$('.prev').click(function() {
	$('.carouse_imgs ul li:last').prependTo($('.carouse_imgs ul'));
	$('.carouse_imgs ul').css('left', '-238px')
	$('.carouse_imgs ul').animate({
		left: 0
	}, 800)
})
//自动轮播
var timer = setInterval(function() {
	$('.next').click();
}, 3000)

//鼠标移入
$('.celebrate_carsoul').on('mouseenter', function() {
	$('.prev').css('display', 'block');
	$('.next').css('display', 'block');
	clearInterval(timer)
})
//鼠标移出
$('.celebrate_carsoul').on('mouseleave', function() {
	$('.prev').css('display', 'none');
	$('.next').css('display', 'none');
	timer = setInterval(function() {
		$('.next').click();
	}, 2000)
})

//还没逛够鼠标移入移出
$('.then li').on('mouseenter', function() {
	$(this).css({
		borderColor: '#f42424'
	})
	$(this).find('.t_name').css('color', '#f42424');
	$(this).find('img').css('opacity', 0.7)
})

$('.then li').on('mouseleave', function() {
	$(this).css({
		borderColor: '#D2D2D2'
	})
	$(this).find('.t_name').css('color', '#555');
	$(this).find('img').css('opacity', 1)
})

//左侧边栏 
//点击跳转到指定的页面
$('.side_item:not(.no)').click(function() {
	var oh = $('.view').eq($(this).index()).offset().top - 60;
	$('dody,html').animate({
		'scrollTop': oh
	}, 500)
})

$('.side_item:last').click(function() {
	$('body,html').animate({
		'scrollTop': 0
	}, 500)
})
//滚动事件
$(window).scroll(function() {
	var winH = $(window).height();
	var oscr = $(window).scrollTop();

	if(oscr > $('.view:first').offset().top - 100) {
		$('.side').show(100);
	} else {
		$('.side').hide(100);
	}

	//右侧下面的top

	//顶部导航栏
	if(oscr > $('.n_nav').offset().top) {
		$('.hide').slideDown(500);
		$('.ibar_f:last').show()
	} else {
		$('.hide').slideUp(500);
		$('.ibar_f:last').hide()
	}

	$('.view').each(function(index) {
		if(oscr + winH - $(this).offset().top > winH * 3 / 4) {
			$('.side_item').css({
				'background-color': '#fafafa',
				'borderColor': '#e6e6e6'
			})
			$('.side_item').find('span').css({
				color: '#333'
			})
			$('.side_item').eq(index).siblings().removeClass('side_item_on')
			$('.side_item').eq(index).css({
				'background-color': '#ff4040',
				'borderColor': '#ff4040'
			})
			$('.side_item').eq(index).find('span').css({
				color: '#fff'
			})
			$('.side_item').eq(index).addClass('side_item_on')
		}
	})

})
//顶部隐藏导航栏
$('.hide .h_intext').focus(function() {
	$(this).val('');
	$(this).css('color', 'rgb(102，102，102)');
})
$('.hide .h_intext').blur(function() {
	$(this).val('Five Plus');
	$(this).css('color', 'rgb(153,153,153)');
})

//右侧边栏
//第3--6个鼠标移入显示,移出隐藏
$('.ibar:gt(1)').hover(function() {
	$(this).find('a').css({
		'background-color': '#f42424'
	})
	$(this).find('.visible').css('visibility', 'visible').animate({
		left: '-92px',
	}, 300)

}, function() {
	$(this).find('a').css({
		'background-color': '#000'
	})
	$(this).find('.visible').css('visibility', 'hidden').animate({
		left: '-121px',
	}, 0)
})

$('.visible').hover(function() {
	$(this).prev().css({
		'background-color': '#000'
	})
	$(this).find('i').css('display', 'none')
}, function() {
	$(this).prev().css({
		'background-color': '#f42424'
	})
	$(this).find('i').css('display', 'block')
})
//第1个鼠标移入显示,移出隐藏
$('.ibar').eq(0).mouseenter(function() {
	$(this).find('a').css({
		'background-color': '#f42424'
	})
})
$('.ibar').eq(0).mouseleave(function() {
	$(this).find('a').css({
		'background-color': '#000'
	})
})
$('.ibar_login').hover(function() {
	$(this).prev().css('background-color', '#000')
}, function() {
	$(this).prev().css('background-color', '#f42424')
})

//第2个鼠标移入显示,移出隐藏
$('.ibar').eq(1).mouseenter(function() {
	//	$(this).children('.carlist').css({
	//		'background-color':'#f42424',
	//		'background-image':'url()'
	//	})
	$(this).children('a').css({
		'background-color': '#f42424',
		'background-image': 'url()'
	});
	$(this).find('.cart_num').css({
		'background-color': '#fff',
		'color':'#f42424'
	})
})
$('.ibar').eq(1).mouseleave(function() {
	$(this).children('a').css({
		'background-color': '#000',
		'background-image': 'url(../images/ibar_sprites.png)'
	});
	$(this).find('.cart_num').css({
		'background-color': '#f42424',
		'color':'#fff'
	})
})

//右侧底部
$('.ibar_f').hover(function() {
	$(this).find('a').css({
		'background-color': '#f42424'
	})
}, function() {
	$(this).find('a').css({
		'background-color': '#000'
	})
})
$('.ibar_f:first').hover(function() {
	$(this).find('.visible_f').css('visibility', 'visible').animate({
		left: '-92px',
	}, 300)
}, function() {
	$(this).find('.visible_f').css('visibility', 'hidden').animate({
		left: '-121px',
	}, 0)
})
//点击跳转到顶部
$('.ibar_f:last').click(function() {
	$('body,html').animate({
		'scrollTop': 0
	}, 500)
})

$('.t_close').on('click', function() {
	$('.right').animate({
		right: '0px'
	}, 500)
	flag_ = true;
})
var flag_ = true;
$('.carlist').click(function(e) {
	console.log(234)
	e.stopPropagation()
	if(flag_ == true) {
		$('.right').animate({
			right: '280px'
		}, 500);
		flag_ = false;
		console.log($('.carlist'))
		$('.carlist').css({
			'background-color': '#f42424',
			'background-image': 'url()'
		})
	} else if(!flag_) {
		$('.right').animate({
			right: '0px'
		}, 500);
		flag_ = true;
		$('.carlist').css({
			'background-color': '#000',
			'background-image': 'url(../images/ibar_sprites.png)'
		})
	}

})

//youxiangdingyue
var num = 0
$('.ibar_').click(function(){
	console.log(num)
	if(num == 0){
		$('.email').css({
			bottom:'0px'
		})
		num = 1;
	}else if(num = 1){
		$('.email').css({
			bottom:'-60px'
		})
		num = 0;
	}
})

$('.ibar:first').click(function(){
	$(".pd-mask,.pd").css({
            display:"block"
        })
})
 $(".pd-x").click(function(){
        $(".pd-mask,.pd").css({
            display:"none"
        })
    })
 
// 点击切换验证码
    var nom=1
    $(".item-info div").click(function(){
        if(nom==1){
            $(".item-info div").removeClass("captcha-img")
            $(".item-info div").addClass("captcha-img2")
            nom=2
        }else if(nom==2){
            $(".item-info div").removeClass("captcha-img2")
            $(".item-info div").addClass("captcha-img")
            nom=1
        }
        
    })