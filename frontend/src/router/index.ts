import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Services from '@/views/Services.vue'
import Home from '@/views/Home.vue'
import Groups from '@/views/Groups.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
