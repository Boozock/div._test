import Vue from 'vue'
import VueRouter from 'vue-router'

const Test = () => import('@/views/Test.vue');
const Result = () => import('@/views/Result.vue');


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Test
  },
  {
    path: '/result',
    component: Result
  },

]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
