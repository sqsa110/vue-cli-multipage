import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter);

let routers = new vueRouter({
  routes : [{
    path : '/',
    redirect : '/login'
  },{
    path : '/login',
    component : (reslove) => require(['./app'],reslove)
  },{
    path : '/index',
    component : (reslove) => require(['./app'],reslove)
  }]
});

export default routers;

