$(function () {
    // 聚焦搜索栏为空
    $(".search input:eq('0')").focus(function(){
        var text_value=$(this).val();
        if(text_value=="周大福"){
            $(this).val("");
        }
    })
    // 失焦搜索栏为默认值
    $(".search input:eq('0')").blur(function(){
        var text_value=$(this).val();
        if(text_value==""){
            $(this).val("周大福");
        }
    })


    //获取元素
    var allCheckbox = $('input[type="checkbox"]'); //获取所有的复选框
    var wholeCheckbox = $(".whole-check");   //获取全选按钮
    var sonCheckbox = $(".son-check");   //获取所有单个商品的复选框
    var cartBox = $(".cart-box")  //每一个商品的大盒子
    var shopCheckbox = $(".shop-check")
    console.log(allCheckbox.length);

    // 点击每一个复选框让其自身选中或者取消选中
    allCheckbox.click(function () {
        if ($(this).is(":checked")) {
            $(this).next("label").addClass("active")
        } else {
            $(this).next("label").removeClass("active")
        }

    })
  

    // 点击全选按钮 并控制下方全选按钮
    wholeCheckbox.click(function () {
        var checkboxs = cartBox.find('input[type="checkbox"]')
        if ($(this).is(":checked")) {
            checkboxs.prop("checked", true)
            checkboxs.next("label").addClass("active")
            $('label:last').addClass("active")
        } else {
            checkboxs.prop("checked", false)
            checkboxs.next("label").removeClass("active")
            $('label:last').removeClass("active")
        }
        totalFn()
    })

    // 点击下方全选按钮，控制上方按钮
    $('label:last').click(function () {
        if ($('label:last').attr("class")=="active") {
            $('label:first').removeClass("active")
        } else {
            $('label:first').addClass("active")
        }
        totalFn()
    })



    // 每个商品和全选按钮的关系
    //sonCheckbox 所有单个商品前面的复选框集合
    sonCheckbox.each(function () {
        //$(this)指的是每一个商品前面的复选框
        $(this).click(function () {
            if ($(this).is(":checked")) { //判断所有的单个商品的选中状态
                var len = sonCheckbox.length
                var num = 0  //num是用来计数的，记录选中商品的数量

                sonCheckbox.each(function () {
                    if ($(this).is(":checked")) {
                        num++
                    }
                })

                if (num == len) {  //如果条件成立说明每一个商品都选中了,让全选按钮选中
                    wholeCheckbox.prop("checked", true)
                    wholeCheckbox.next("label").addClass("active")
                }
            } else {
                wholeCheckbox.prop("checked", false)
                wholeCheckbox.next("label").removeClass("active")
            }
            totalFn()
        })
    })


    //店铺的全选和店铺中单个产品选中状态的关系
    //shopCheckbox 指的是店铺的全选按钮集合
    shopCheckbox.each(function () {
        $(this).click(function () {
            if ($(this).is(":checked")) {  //判断店铺的复选框是否选中
                var len = shopCheckbox.length
                var num = 0;


                shopCheckbox.each(function () {
                    if ($(this).is(":checked")) {
                        num++
                    }
                })

                if (num == len) {
                    wholeCheckbox.prop("checked", true)
                    wholeCheckbox.next("label").addClass("active")
                }

                //让每一个店铺中的单品产品选中
                //$(this).parents(".cart-box").find(".son-check")  每个店铺中单个产品的复选框集合
                $(this).parents(".cart-box").find(".son-check").prop("checked", true)
                $(this).parents(".cart-box").find(".son-check").next("label").addClass("active")

            } else {
                wholeCheckbox.prop("checked", false)
                wholeCheckbox.next("label").removeClass("active")

                $(this).parents(".cart-box").find(".son-check").prop("checked", false)
                $(this).parents(".cart-box").find(".son-check").next("label").removeClass("active")
            }
            totalFn()
        })
    })

    //每个店铺全选和它内部商品选中状态的关系
    //店铺中商品 son-check有一个没有选中，该商品的全选按钮和总的全选按钮就不选中
    cartBox.each(function () {
        var that = $(this)
        var sonChecks = that.find(".son-check");  //获取每一个cart-box下面的单个商品
        sonChecks.each(function () {
            $(this).click(function () {
                if ($(this).is(":checked")) {  //判断cart-box下面的单个商品是否选中
                    var len = sonChecks.length
                    var num = 0
                    sonChecks.each(function () {
                        if ($(this).is(":checked")) {
                            num++
                        }
                    })
                    if (num == len) {
                        $(this).parents(".cart-box").find(".shop-check").prop("checked", true)
                        $(this).parents(".cart-box").find(".shop-check").next("label").addClass("active")
                    }
                } else {
                    $(this).parents(".cart-box").find(".shop-check").prop("checked", false)
                    $(this).parents(".cart-box").find(".shop-check").next("label").removeClass("active")
                }
                totalFn()
            })
        })

    })


    // 点击加号
    var oAdd = $(".add");
    oAdd.click(function () {
        var inputVal = $(this).prev("input");
        var count = parseInt(inputVal.val()) + 1  //点击增加1
        inputVal.val(count)
        $(this).next("button")[0].removeAttribute("disabled")
        //获取商品的单价
        var price = $(this).parents(".cart-lists").find(".price").html()
        //计算单个商品小计
        var priceTotal = count * parseFloat(price)
        $(this).parents(".cart-lists").find(".price-sum").html(priceTotal+".00")

        totalFn()
    })

    //点击减号
    var reduce = $(".reduce"); //获取减号
    reduce.click(function () {
        var inputVal = $(this).parents(".amount-box").find("input");
        var count = parseInt(inputVal.val()) - 1
        if (count < 1) {
            count = 1
            $(this)[0].setAttribute("disabled", true)
        }
        inputVal.val(count)
        var price = $(this).parents(".cart-lists").find(".price").html()
        //计算单个商品小计
        var priceTotal = count * parseFloat(price)
        $(this).parents(".cart-lists").find(".price-sum").html(priceTotal+".00")

        totalFn()
    })


    //输入产品数量计算商品的小计
    var sumInput = $(".amount-box").find("input")
    sumInput.keyup(function () {
        var inputVal = $(this).parents(".amount-box").find("input");
        var count = parseInt(inputVal.val().replace(/\D|^0/g, ""))
        console.log(count);
        if (!count) {
            count = 1
        }
        inputVal.val(count)
        var price = $(this).parents(".cart-lists").find(".price").html()
        var priceTotal = count * parseFloat(price)
        $(this).parents(".cart-lists").find(".price-sum").html(priceTotal+".00")

        totalFn()
    })

    //点击删除按钮
    var deleCart = null
    var cartContent = ""
    $(".cart-dele").click(function () {
        deleCart = $(this).parents(".cart-lists")
        cartContent = $(this).parents(".cart-content")
        $(".modal-bg").fadeIn(300)
        $(".modal-box").fadeIn(300)


    })

    //点击模态框取消按钮
    $(".close").click(function () {
        $(".modal-bg").fadeOut(300)
        $(".modal-box").fadeOut(300)
    })

    //点击模态框的确定按钮
    $(".ok").click(function () {
        deleCart.remove()
        console.log(cartContent.html());
        if (cartContent.html().trim() == null || cartContent.html().trim().length == 0) {
            console.log(1111);
            cartContent.parents(".cart-box").remove()
        }

        $(".modal-bg").fadeOut(300)
        $(".modal-box").fadeOut(300)
        sonCheckbox = $(".son-check");  //重新获取一下商品
        totalFn()

    })


    //点击删除选中按钮
    var deleCart = null
    var cartContent = ""
    $(".cart-dele-all").click(function () {
        deleCart = $(".active").parents(".cart-lists")
        cartContent = $(".active").parents(".cart-content")
        $(".modal-bg").fadeIn(300)
        $(".modal-box").fadeIn(300)


    })

    //点击模态框取消按钮
    $(".close").click(function () {
        $(".modal-bg").fadeOut(300)
        $(".modal-box").fadeOut(300)
    })

    //点击模态框的确定按钮
    $(".ok").click(function () {
        deleCart.remove()
        console.log(cartContent.html());
        if (cartContent.html().trim() == null || cartContent.html().trim().length == 0) {
            console.log(1111);
            cartContent.parents(".cart-box").remove()
        }

        $(".modal-bg").fadeOut(300)
        $(".modal-box").fadeOut(300)
        sonCheckbox = $(".son-check");  //重新获取一下商品
        totalFn()

    })


    // 计算价格的函数
    function totalFn() {
        var total_price = 0;  //总价
        var total_count = 0;  //商品总数  
        sonCheckbox.each(function () {
            if ($(this).is(":checked")) {
                var gooodsPrice = parseFloat($(this).parents(".cart-lists").find(".price-sum").html())
                var goodsNum = parseFloat($(this).parents(".cart-lists").find(".amount-box").find("input").val())
                total_price += gooodsPrice
                total_count += goodsNum
            }
        })
        $(".pay-price").html(total_price+".00")
        $(".buy-num").html(total_count)
    }
    totalFn()
})