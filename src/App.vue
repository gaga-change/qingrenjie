<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <router-link to="/qiji">奇迹</router-link>
      <router-link to="/dnf">毒奶粉</router-link>
    </ul>
    <hr>
    <router-view ></router-view>
    <router-view name="b"></router-view>
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    height: 4000px;
  }
</style>
