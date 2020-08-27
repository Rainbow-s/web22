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
            if (oSrcollTop > 710) {
                $(".item-9").animate({ bottom: "-100px" }, 0)
                $(".item-10").animate({ bottom: "-140px" }, 0)
            } else if (oSrcollTop < 100) {
                $(".item-9").animate({ bottom: "-140px" }, 10)
                $(".item-10").animate({ bottom: "-190px" }, 10)
            }
        })
        // 点击返回顶部
    $(".item-10").click(function() {
        $("body,html").animate({
            "scrollTop": 0
        }, 500)
    })
})
var days = document.getElementById('days');
var hours = document.getElementById('hours');
var mins = document.getElementById('mins');
var secds = document.getElementById('secds');
var daysKu = document.getElementById('daysKu');
var hoursKu = document.getElementById('hoursKu');
var minsKu = document.getElementById('minsKu');
var secdsKu = document.getElementById('secdsKu');

function getTimer(setTime) {
    var nowTime = +new Date();
    var settime = +new Date(setTime);
    var disTime = (settime - nowTime) / 1000;
    var dayTime = parseInt(disTime / 60 / 60 / 24);
    dayTime = dayTime < 10 ? '0' + dayTime : dayTime;
    var dayHours = parseInt(disTime / 60 / 60 % 24);
    dayHours = dayHours < 10 ? '0' + dayHours : dayHours;
    var dayMinutes = parseInt(disTime / 60 % 60);
    dayMinutes = dayMinutes < 10 ? '0' + dayMinutes : dayMinutes;
    var daySeconds = parseInt(disTime % 60);
    daySeconds = daySeconds < 10 ? '0' + daySeconds : daySeconds;
    var relTime = {};
    relTime['dayTime'] = dayTime;
    relTime['dayHours'] = dayHours;
    relTime['dayMinutes'] = dayMinutes;
    relTime['daySeconds'] = daySeconds;
    return relTime;
}
setInterval(function() {
    var Time = getTimer('2020.10.10 11:48:33');
    days.innerText = Time.dayTime;
    hours.innerText = Time.dayHours;
    mins.innerText = Time.dayMinutes;
    secds.innerText = Time.daySeconds;
}, 1000)
setInterval(function() {
    var Time = getTimer('2020.10.10 11:50:31');
    daysKu.innerText = Time.dayTime;
    hoursKu.innerText = Time.dayHours;
    minsKu.innerText = Time.dayMinutes;
    secdsKu.innerText = Time.daySeconds;
}, 1000)
setInterval(function() {
    var Time = getTimer('2021.04.30 13:46:57');
    document.getElementById('dayscolths').innerText = Time.dayTime;
    document.getElementById('hourscolths').innerText = Time.dayHours;
    document.getElementById('minscolths').innerText = Time.dayMinutes;
    document.getElementById('secdscolths').innerText = Time.daySeconds;
}, 1000)
setInterval(function() {
    var Time = getTimer('2020.10.10 11:50:31');
    document.getElementById('daysTwo').innerText = Time.dayTime;
    document.getElementById('hoursTwo').innerText = Time.dayHours;
    document.getElementById('minsTwo').innerText = Time.dayMinutes;
    document.getElementById('secdsTwo').innerText = Time.daySeconds;
}, 1000)
setInterval(function() {
    var Time = getTimer('2020.10.10 11:48:33');
    document.getElementById('daysKo').innerText = Time.dayTime;
    document.getElementById('hoursKo').innerText = Time.dayHours;
    document.getElementById('minsKo').innerText = Time.dayMinutes;
    document.getElementById('secdsKo').innerText = Time.daySeconds;
}, 1000)