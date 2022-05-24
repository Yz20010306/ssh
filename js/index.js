$(function () {
  $("button").on("click", one);
    function one() {
        this.style.display = 'none';    
    var btn = document.querySelector("button");
    var audio = document.querySelector("audio");
    btn.addEventListener("click", function () {
      audio.autoplay="autoplay";
      console.log(1);
    });
    btn.click();

    var deg = 360 / $("li").length;
    var nowRoty;
    var nowRotx = -20;
    (function () {
      $("li").each(function (index, item) {
        // console.log(index);
        item.style.transform =
          "rotateY(" + deg * index + "deg) translateZ(500px)";
        item.style.transition = "1s " + ($("li").length - index) * 0.1 + "s";
      });
      (function () {
        var inner = document.querySelector(".inner");
        var index = 1;
        var timer = setInterval(function () {
          index++;
          inner.style.transform =
            "rotateX(-20deg) rotateY(" + -index + "deg) translateZ(50px)";
        }, 100);
        inner.style.transition = "all 0.5s linear";
        $(document).on("mousedown", function () {
          clearInterval(timer);
        });
        $(document).on("mouseup", function () {
          clearInterval(timer);
          timer = setInterval(function () {
            nowRoty++;
            inner.style.transform =
              "rotateX(" +
              nowRotx +
              "deg) rotateY(" +
              nowRoty +
              "deg) translateZ(50px)";
          }, 100);
        });
      })();
    })();

    (function () {
      var rotX = -20;
      var rotY = 0;
      var inner = document.querySelector(".inner");
      $(document).on("mousedown", function (e) {
        // console.log(1);
        // 获取鼠标初始位置坐标
        var lastX = e.clientX;
        var lastY = e.clientY;
        inner.style.transition = "";
        this.onmousemove = function (e) {
          // 获取移动后的坐标
          var nowX = e.clientX;
          var nowY = e.clientY;
          // 计算坐标差
          var minusX = nowX - lastX;
          var minuY = nowY - lastY;
          rotX -= minuY * 0.05;
          rotY += minusX * 0.05;
          inner.style.transform =
            "rotateX(" + rotX + "deg) rotateY(" + rotY + "deg)";
          lastX = nowX;
          lastY = nowY;
          nowRoty = rotY;
          nowRotx = rotX;
        };
        this.onmouseup = function (e) {
          //鼠标松开
          this.onmousemove = null; //清除鼠标移动
          inner.style.transition = "all 0.5s linear";
        };
      });
    })();
  }
});
