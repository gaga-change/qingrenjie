<!-- 固定菜单组件-->
<template>
  <!----------------------侧边框------------------------>
  <!--<div data-wow-iteration="2" class="span3 wow swing center"-->
    <!--<div style="width: 200px;height: 400px;background: red;"></div>-->
  <!--</div>-->
  <div  data-wow-iteration="2" class="sidebar  animated swing" style="visibility: visible; animation-iteration-count: 2; animation-name: swing;">
    <p class="sidebar-hong">购买页面商品<br/>送红包</p>
    <!--<span v-text="$route"></span>-->
    <ul class="all-in-one-sidebar">
      <li v-for="item in list[$route.matched[0].props.title]">
        <a  v-text="item.name">
        </a>
      </li>
      <li>
        <a  target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2602776493&site=qq&menu=yes">联系QQ</a>
      </li>
      <li>
    </ul>
    <p id="goTop" class="bottom-top">
      <a class="goTop" onclick="goBack()">返回顶部</a>
    </p>
  </div>

  <!----------------END---------------->
</template>

<script>
  import jQuery from 'jquery'
  import data from '../data/data.json'
  var $ = jQuery;
  export default {
    name: "sidebar",
    data(){
      return {
        list: data
      }
    },
    props: {
      title: {
        type: String
//        default: 'qiji'
      }
    },
    created: function () {
      //绑定一个滚动条事件
      window.onscroll = goTop;

      //回到首页的函数
      function goTop() {

        //兼容IE
        // document.documentElement.scrollTop 是IE的获取页面滚动条的高度
        //document.body.scrollTop是其他浏览器的获取页面滚动条的高度
        var heighs = document.documentElement.scrollTop || document.body.scrollTop;
        var goTop = document.getElementById("goTop");
        //判断如果页面没有下拉就不显示回到顶部
        if (heighs < 686) {
          //				console.log("<200")
          goTop.style.display = "none";
        } else {
          //				console.log("> 200")
          goTop.style.display = "block";
        }

      }

      window.goBack = function () {
//        console.log("回到顶部");
        var tep = 0;
        var heighs = document.documentElement.scrollTop || document.body.scrollTop;
        tep = heighs/100;
        var inteval = setInterval(function () {
          var heighs = document.documentElement.scrollTop || document.body.scrollTop;
//          console.log("gaga");
          if(heighs < 3) {
//              console.log(heighs, heighs<3)
              clearInterval(inteval);
          }
          if (document.documentElement.scrollTop) {

            document.documentElement.scrollTop = document.documentElement.scrollTop - tep
          } else {
            document.body.scrollTop = document.body.scrollTop - tep;
          }
        }, 2);
      }
      function scroll(k){
        return $(".lover_first").eq(k).position().top;
      }
      //console.log($scroll)
      $(window).scroll(function(){
        if($(window).scrollTop()-700<scroll(0)){
          $('.all-in-one-sidebar li').removeClass('lover_click');
        }
        for(var k=0;k<6;k++){
          if($(window).scrollTop()-700>scroll(k)){
            $('.all-in-one-sidebar li').removeClass('lover_click');
            $('.all-in-one-sidebar li').eq(k).addClass('lover_click');
          }
        }

      })
    }
  }
</script>

<style>
  body, ul, li, p, h1, h2, input, form, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  /*=================侧边栏=================*/
  .sidebar {
    width: 187px;
    height: 397px;
    display: block;
    position: fixed;
    top: 300px;
    right: 3%;
    background: url(../images/sidebar.png);
    z-index: 10;
  }

  .sidebar-hong {
    cursor: pointer;
    width: 187px;
    line-height: 26px;
    display: block;
    text-align: center;
    font-size: 23px;
    padding: 35px 0 17px 0;
    color: #f3dfb2;
  }

  .all-in-one-sidebar {
    width: 106px;
    height: 240px;
    display: block;
    margin: 0 auto;
  }

  .all-in-one-sidebar li a {
    cursor: pointer;
    width: 106px;
    height: 30px;
    display: block;
    background: url(../images/cbk.jpg) no-repeat;
    margin-top: 4px;
    text-align: center;
    line-height: 30px;
    color: #ed4360;
  }

  /*=====隐藏返回顶部========*/
  .bottom-top {
    cursor: pointer;
    width: 120px;
    height: 50px;
    display: block;
    margin: 0 auto;
    display: none;
    background: url(../images/bottom-top.png) no-repeat;
    position: relative;
    top: -1px;
    right: -1px;
  }

  .goTop {
    cursor: pointer;
    width: 100px;
    height: 50px;
    display: block;
    text-align: center;
    line-height: 50px;
    color: #f3dfb2;
  }

  /*动画效果*/
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes swing {
    20% {
      -webkit-transform: rotate3d(0, 0, 1, 15deg);
      transform: rotate3d(0, 0, 1, 15deg);
    }

    40% {
      -webkit-transform: rotate3d(0, 0, 1, -10deg);
      transform: rotate3d(0, 0, 1, -10deg);
    }

    60% {
      -webkit-transform: rotate3d(0, 0, 1, 5deg);
      transform: rotate3d(0, 0, 1, 5deg);
    }

    80% {
      -webkit-transform: rotate3d(0, 0, 1, -5deg);
      transform: rotate3d(0, 0, 1, -5deg);
    }

    to {
      -webkit-transform: rotate3d(0, 0, 1, 0deg);
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }

  @keyframes swing {
    20% {
      -webkit-transform: rotate3d(0, 0, 1, 15deg);
      transform: rotate3d(0, 0, 1, 15deg);
    }

    40% {
      -webkit-transform: rotate3d(0, 0, 1, -10deg);
      transform: rotate3d(0, 0, 1, -10deg);
    }

    60% {
      -webkit-transform: rotate3d(0, 0, 1, 5deg);
      transform: rotate3d(0, 0, 1, 5deg);
    }

    80% {
      -webkit-transform: rotate3d(0, 0, 1, -5deg);
      transform: rotate3d(0, 0, 1, -5deg);
    }

    to {
      -webkit-transform: rotate3d(0, 0, 1, 0deg);
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }

  .swing {
    -webkit-transform-origin: top center;
    transform-origin: top center;
    -webkit-animation-name: swing;
    animation-name: swing;
  }


</style>
