import Vue from 'vue'
import Router from 'vue-router'
import List from 'components/List'
import Sidebar from 'components/Sidebar'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/qiji',
      components: {
        default: List,
        b: Sidebar
      },
      props: {title: 'qiji'}
    },
    {
      path: '/dnf',
      components: {
        default: List,
        b: Sidebar
      },
      props: {title: 'dnf'}
    },
    {path: '*', redirect: 'qiji'}
  ]
})
