import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'datepicker',
    component: () => import(/* webpackChunkName: "about" */ '../views/DatePicker')
  },
 
  {
    path: '/todo',
    name: 'todo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Todo/index')
  },
  {
    path: '/datepicker',
    name: 'datepicker',
    component: () => import(/* webpackChunkName: "about" */ '../views/DatePicker')
  },
   {
      path: '/myswiper',
      name: 'myswiper',
      component: () => import(/* webpackChunkName: "about" */ '../views/ShowSwiper')
   },
   {
      path: '/mytree',
      name: 'mytree',
      component: () => import(/* webpackChunkName: "about" */ '../views/Mytree/Entry')
   },
   {
    path: '/emit',
    name: 'emit',
    component: () => import(/* webpackChunkName: "about" */ '../views/emit/parent')
   },
   {
    path: '/cascader',
    name: 'cascader',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cascader')
 }

]

const router = new VueRouter({
  routes
})

export default router
