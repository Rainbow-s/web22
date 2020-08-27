  //   切换小图片(g-img  和 img-item)
  $(".img-item li").mouseover(function() {
      $(this).addClass("active").siblings("li").removeClass("active");
      // 小图片（this此处指向li）
      var img = $(this).find("img");
      // 找到大图片（找到自己的父亲上一个兄弟里面的img）
      var imgbig = $(this).parents(".img-list").prev(".max-wrap").prev(".min-wrap").find("img");
      var imgmax = $(this).parents(".img-list").prev(".max-wrap").find("img");
      // 小图片的路径
      var minsrc = img.attr("src");
      // 设置大图片的路径
      imgbig.attr("src", minsrc);
      imgmax.attr("src", minsrc);

  });
  //   放大镜
  //进入min-wrap 显示蒙版显示大盒子
  $(".min-wrap").bind("mouseover", function() {
      $(".mask").show()
      $(".mask").css({
          width: $(".min-wrap").width() * $(".max-wrap").width() / $("#max").width(),
          height: $(".min-wrap").height() * $(".max-wrap").height() / $("#max").height()
      })

      $(".max-wrap").show()
  })
  $(".min-wrap").bind("mouseout", function() {
          $(".mask").hide()
          $(".max-wrap").hide()
      })
      //移动mask
  $(".min-wrap").bind("mousemove", function(e) {
      console.log(e.clientX);
      console.log(e.clientY);
      var oLeft = e.clientX - $(".min-wrap").offset().left - $(".mask").width() / 2;
      var oTop = e.clientY - $(".min-wrap").offset().top - $(".mask").height() / 2;
      if (oLeft <= 0) {
          oLeft = 0
      } else if (oLeft > $(".min-wrap").width() - $(".mask").width()) {
          oLeft = $(".min-wrap").width() - $(".mask").width()
      }
      if (oTop <= 0) {
          oTop = 0
      } else if (oTop > $(".min-wrap").height() - $(".mask").height()) {
          oTop = $(".min").height() - $(".mask").height()
      }
      $(".mask").css({
          left: oLeft,
          top: oTop
      })
      var biliL = oLeft / ($(".min").width() - $(".mask").width())
      var biliT = oTop / ($(".min").height() - $(".mask").height())
      var oWidth = $("#max").width() - $(".max-wrap").width()
      var oHeight = $("#max").height() - $(".max-wrap").height()
      $("#max").css({
          left: -oWidth * biliL,
          top: -oHeight * biliT
      })
  })

  //   点击选中
  $(".ui-label").click(function() {

      $(".ui-label").toggleClass("active");
  })

  //   商品数量的增加与减少
  var num = 1;
  $(".btn-add").click(function() {
      num++;
      $(".buy-num").val(num);
  })
  $(".btn-reduce").click(function() {
      num--;
      if (num <= 0) {
          num = 1;
      }
      $(".buy-num").val(num);
  })

  //   左边放大镜图片的移动 
  //   右
  var num1 = 0;
  $(".img-list .right").click(function() {
          num1++;
          if (num1 >= 1) {
              num1 = 1;
          }
          var target = num1 * -65 + "px";
          $(".img-items ul").css("left", target)
      })
      //   左
  $(".img-list .left").click(function() {
      num1--;
      if (num1 <= 0) {
          num1 = 0;
      }
      var target = num1 * -65 + "px";
      $(".img-items ul").css("left", target)
  })

  //   看了又看的移动
  var num2 = 0;
  $(".up-down .down").click(function() {
      num2++;
      if (num2 >= 2) {
          num2 = 2;
      }
      var target = num2 * -185 + "px";
      $(".goodswrap ul").css("top", target)
  })
  $(".up-down .up").click(function() {
      num2--;
      if (num2 <= 0) {
          num2 = 0;
      }
      var target = num2 * -185 + "px";
      $(".goodswrap ul").css("top", target)
  })

  //   tab切换
  $(".tab ul li").click(function() {
          var index = $(this).index();
          $(this).addClass("on").siblings("li").removeClass("on");
          $(".t-box .tbox").eq(index).addClass("on").siblings("div").removeClass("on")
      })
      // 购物车
  $(".shopcar").mouseover(function() {
      $(".hidden").css("display", "block");
  })
  $(".shopcar").mouseout(function() {
      $(".hidden").css("display", "none");
  })