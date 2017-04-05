import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import router from './router'
import App from './app'

Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
  name : 'login_main',
  el : '#app',
  router,
  render : h => h(App),
  mounted(){

  }
});


/*
router.map({
  '/view-a' : {
    component : App
  },
  '/view-b' : {
    component : App
  }
});
*/
/*
new Vue({
  router
}).$mount('#app');
*/
/*
let fd = {
  '/view-a' : {
    component : App
  },
  '/view-b' : {
    component : App
  }
}

//  router.start(fd,"#app");
*/
/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
//  components: { App }
  render: h => h(App)
})
*/
