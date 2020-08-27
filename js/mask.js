$(function(){
    // 蒙版
    $(".item").click(function(){
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
})