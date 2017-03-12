import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './app'
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
//  components: { App }
  render: h => h(App)
})
