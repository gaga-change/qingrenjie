<!--列表 组件-->
<template>
  <div>
    <div class="love_lists" style="display: block;">
      <!----vip区---->
      <div class=" lover_first" v-for="item in list[$route.matched[0].props.title]">
        <p class="lover_first_top">
          <span>············</span>
          <b v-text="item.name"></b>
          <span>············</span>
        </p>
        <ul class="love_first_center">
          <transition-group name="list" tag="">
            <li v-for="(son, index) in item.son" :key="son" class="list-item" :class="{'love_margin' : (index+1)%4==0}">
              <a :href="son.url" target="_blank">
                <img :src="'/static/' + $route.matched[0].props.title+'/'+son.name + '.jpg'"/>
                <p v-text="son.txt"></p>
              </a>
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import data from '../data/data.json'
  export default {
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

  }
</script>

<style>
  .love_first_center li {
    overflow: hidden;
  }

  .love_first_center li:hover {
    outline: 3px solid #ed4360;
  }

  .love_first_center li img {
    -webkit-transition: all .5s ease-in-out;
    -moz-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
  }

  .love_first_center li:hover img {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }

  .list-enter-active, .list-leave-active {
    transform: translateX(0px);
    transition: all 1s;
  }

  .list-enter {
    opacity: 0;
    transform: translateX(-20px);
  }

  .list-leave-active {
    opacity: 0;
    transform: translateY(-300px);
    transition: all 1.4s;
  }
</style>
