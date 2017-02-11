<template>
  <!----------------------侧边框------------------------>
  <div class="sidebar">
    <p class="sidebar-hong">购买页面商品<br/>送红包</p>
    <!--<span v-text="$route"></span>-->
    <ul class="all-in-one-sidebar">
      <li v-for="item in list[$route.matched[0].props.title]">
        <a href="#" v-text="item.name">
        </a>
      </li>
      <li>
        <a href="#">联系QQ</a>
      </li>
      <li>
        <!--<a href="#">VIP区</a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="#">菲利亚</a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="#">纳尔斯</a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="#">撒拉曼德</a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="#">巴内尔特</a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="#">电信1区</a>-->
        <!--</li>-->

    </ul>
    <p id="goTop" class="bottom-top">
      <a class="goTop" onclick="goBack()">返回顶部</a>
    </p>
  </div>

  <!----------------END---------------->
</template>

<script>
  import data from '../data/data.json'
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

      function goBack() {
        var heighs = document.documentElement.scrollTop || document.body.scrollTop;
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
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

</style>
