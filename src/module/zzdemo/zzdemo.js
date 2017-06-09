import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router'
import store from '../../vuex/index/store'
import App from './app'


Vue.use(ElementUI)

new Vue({
  name: 'index',
  el: '#index',
  router,
  store,
  render: h => h(App)
})

