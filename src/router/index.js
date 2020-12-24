import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'datepicker',
    component: () => import( '../views/DatePicker')
  },
 
  {
    path: '/todo',
    name: 'todo',
    component: () => import( '../views/Todo/index')
  },
  {
    path: '/datepicker',
    name: 'datepicker',
    component: () => import( '../views/DatePicker')
  },
   {
      path: '/myswiper',
      name: 'myswiper',
      component: () => import( '../views/ShowSwiper')
   },
   {
      path: '/mytree',
      name: 'mytree',
      component: () => import( '../views/Mytree/Entry')
   },
   {
    path: '/emit',
    name: 'emit',
    component: () => import( '../views/emit/parent')
   },
   {
    path: '/cascader',
    name: 'cascader',
    component: () => import( '../views/Cascader')
 }

]

const router = new VueRouter({
  routes
})

export default router
