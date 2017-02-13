// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Sidebar from './components/Sidebar.vue'
import Guize from './components/guize.vue'
import jQuery from 'jquery'


var $ = jQuery;
Vue.component("sidebar", Sidebar);
Vue.component("guize", Guize);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

$(function () {
  $('.all-in-one-sidebar li').on('click', function () {
    $('.all-in-one-sidebar li').removeClass('lover_click');
    $(this).addClass('lover_click');
    // console.log($(this).index());
    if ($(this).index() == 6) return;
    $('html,body').animate({scrollTop: $(".lover_first").eq($(this).index()).position().top + 800}, 800);
  });
  console.log("%c5173 欢迎您~"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em")
});
