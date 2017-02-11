<template>
  <div>
    <h1>我是列表

    </h1>
    <h3 v-text="title"></h3>
    <ul>
      <li v-for="item in list[$route.matched[0].props.title]">
        <span v-text="item.name"></span>
        <ul>
          <li v-for="son in item.son">
            <span v-text="son.name"></span>
          </li>
        </ul>
        <hr>
      </li>
    </ul>
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
