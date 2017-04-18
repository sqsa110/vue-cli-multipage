import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './app'

Vue.use(ElementUI);

new Vue({
  name : 'login',
  el : '#app',
  render : h => h(App),
  mounted(){
  }
});
