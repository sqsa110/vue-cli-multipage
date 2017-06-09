import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter);

let routers = new vueRouter({
  routes: [{
    path: '/',
    redirect: '/index'
  },{
    path: '/index',
    component: (reslove) => require(['./router/index'], reslove),
    children: [
      {path: '', component: (reslove) => require(['./router/index_0'], reslove)},
      {path: '1', component: (reslove) => require(['./router/index_1'], reslove)}
    ]
  },{
    path: '/index2',
    component: (reslove) => require(['./router/index2'], reslove)
  }]
})

export default routers

