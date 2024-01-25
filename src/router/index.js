import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import InfoSection from '@/components/Homedir/InfoSection.vue'

import regView from '@/components/Authdir/RegModal.vue'
import logView from '@/components/Authdir/LogModal.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/register',
    name: 'Register-View',
    component: regView
  },

  {
    path: '/login',
    name: 'Login',
    component: logView
  },

  {
    path: '/info',
    name: 'Info',
    component: InfoSection
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
