$('.h_letter a').each(function(index, item) {
	$(this).mouseover(function() {
		var that = $(this);
		var oh = 0;
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
			var ah = $('.h_ul').height() - $('.h_ul li:last').height();
			var ch = $('.h_bar').height() - $('.h_citybar').height();
			var yh = oh / ah * ch;
			$('.h_citybar').stop().animate({
				top: yh + 'px'
			}, 500)
		})
	})
})
$('.h_citybar').mousedown(function(e) {
	var ey = e.pageY;
	$('.h_citybar').mousemove(function(e) {
		var mh = e.pageY - $('.h_bar').offset().top - $('.h_citybar').height() / 2;
		var maxh = $('.h_bar').height() - $('.h_citybar').height();
		if(mh <= 0) {
			mh = 0;
		} else if(mh >= maxh) {
			mh = maxh;
		}
		var ch = $('.h_bar').height() - $('.h_citybar').height();
		var ah = $('.h_ul').height() - $('.h_ul li:last').height();
		var bili = mh / ch * ah;
		$('.h_ul').stop().animate({
			'marginTop': -bili + 'px'
		}, 200)

		$('.h_citybar').css({
			'top': mh
		})
	})
	$('.h_citybar').mouseup(function(e) {
		$('.h_citybar').off('mousemove')
	})
	$('.h_citybar').mouseleave(function(e) {
		$('.h_citybar').off('mousemove')
	})

})
$('.h_citychoice').hover(function() {
	$('.h_citychoice').addClass('h_hover')
}, function() {
		$('.h_citychoice').removeClass('h_hover');
	$('.h_ul').css('margin-top', 0);
	$('.h_citybar').css('top', 0);
})

$('.h_alllist').bind('mousewheel', function(e) {
	var maxh = $('.h_ul').height() - $('.h_ul li:last').height();
	var top = Number($('.h_ul').css('margin-top').slice(0, -2));
	var ch = $('.h_bar').height() - $('.h_citybar').height();
	var ah = $('.h_ul').height() - $('.h_ul li:last').height();
	var bili = -top / ah * ch;
	$('.h_citybar').css({
		'top': bili
	})

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

$('.h_navi').hover(function(){
	$('.h_navi').addClass('h_hover');
},function(){
	$('.h_navi').removeClass('h_hover')
})