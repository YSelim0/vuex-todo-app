import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Yapilacak from '../views/Yapilacak.vue'
import Yapildi from '../views/Yapildi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/yapilacak',
    name: 'Yapilacak',
    component: Yapilacak
  },
  {
    path: '/yapildi',
    name: 'Yapildi',
    component: Yapildi
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
