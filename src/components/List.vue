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
          <li v-for="(son, index) in item.son" :class="{'love_margin' : (index+1)%4==0}">
           <img :src="'/static/' + $route.matched[0].props.title+'/'+son.name + '.jpg'"/>
            <p v-text="son.txt"></p>
          </li>
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

</style>
