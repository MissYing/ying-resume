// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import GComponents from '@/components/public'
import 'animate.css'

Vue.use(GComponents)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

let titleMap = {
  default: '主页',
  home: '主页',
  info: '详细信息',
  contact: '联系我',
  personal: '基本信息',
  work: '工作经历',
  project: '项目经验'
}
router.beforeEach((to, from, next) => {
  document.title = titleMap[to.path.replace('/', '').toLowerCase() || 'default']
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
