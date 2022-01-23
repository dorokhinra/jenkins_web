import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Api from '@/views/core/Api.vue'
import Common from '@/views/core/Common.vue'
import Ascn from '@/views/adapters/Ascn.vue'
import Mnis from '@/views/adapters/Mnis.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Api',
    component: Api
  },
  {
    path: '/Common',
    name: 'Common',
    component: Common
  },
  {
    path: '/Ascn',
    name: 'Ascn',
    component: Ascn
  },
  {
    path: '/Mnis',
    name: 'Mnis',
    component: Mnis
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
