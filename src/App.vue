<template>
  <div id="app">
    <!--header-->
    <div id="lover_content_wrap">
      <div class="lover_content">
        <div class="banner_top"></div>
        <div class="lover_vip">
          <ul class="lover_vip_list" :class="{'change_bg': $route.matched[0].props.title == 'dnf'}">
            <router-link tag="li" class="lover_left" to="/qiji"></router-link>
            <router-link tag="li" class="lover_right" to="/dnf"></router-link>
          </ul>
          <!--
                    <transition :name="$route.matched[0].props.title == 'dnf'? 'slide-right':'slide-left'">
          -->
          <transition :name="transitionName">
            <router-view class="child-view"></router-view>
          </transition>
        </div>
      </div>
    </div>
    <router-view name="b"></router-view>

  </div>
</template>

<script>
  import data from './data/data.json'
  export default {
    name: 'app',
    data(){
      return {
        data: data,
        transitionName: 'slide-left'
      }
    }
  }
</script>

<style>
  @import "css/main.css";
  /*body{*/
  /*min-width: 1582px;*/
  /*}*/

  /*动画效果*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  .child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100px, 0);
    transform: translate(100px, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100px, 0);
    transform: translate(-100px, 0);
  }
</style>
