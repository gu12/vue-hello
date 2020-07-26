import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
 }
]

const router = new VueRouter({
  routes
})

export default router
