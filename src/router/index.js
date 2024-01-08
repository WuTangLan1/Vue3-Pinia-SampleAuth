import { createRouter, createWebHistory } from 'vue-router'
import EasyModeView from '@/views/EMview.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: EasyModeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
