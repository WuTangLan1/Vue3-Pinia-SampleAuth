import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegView from '@/views/registerView.vue';
import LogView from '@/views/loginView';
import InfoSection from '@/components/Homedir/InfoSection.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegView
  },
  {
    path: '/login',
    name: 'login',
    component: LogView
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
