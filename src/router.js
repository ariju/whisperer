// router.js

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

//ここを追加
import User from '@/views/User.vue' 

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
    // ここから追加
    {
      path: '/user/:uid',
      name: 'user',
      component: User
    },
    // ここまで追加
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})
