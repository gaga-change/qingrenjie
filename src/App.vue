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
          <router-view name="b"></router-view>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import data from './data/data.json'
  export default {
    name: 'app',
    data(){
        return {
            data: data
        }
    }
  }
</script>

<style>
  @import "css/main.css";
  /*body{*/
    /*min-width: 1582px;*/
  /*}*/
</style>
