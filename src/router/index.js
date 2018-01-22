import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/page/home'], resolve)
    },
    {
      path: '/info',
      name: 'info',
      component: resolve => require(['@/page/info'], resolve)
    },
    {
      path: '/contact',
      name: 'contact',
      component: resolve => require(['@/page/contact'], resolve)
    },
    {
      path: '/personal',
      name: '/personal',
      component: resolve => require(['@/page/infoDetail/personal'], resolve)
    },
    {
      path: '/work',
      name: 'work',
      component: resolve => require(['@/page/infoDetail/work'], resolve)
    },
    {
      path: '/project',
      name: 'project',
      component: resolve => require(['@/page/infoDetail/project'], resolve)
    }
  ]
})
