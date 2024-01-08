import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EasyModeView from '@/views/EMview.vue'
import RegModal from '@/components/Authdir/regModal.vue';
import LogModal from '@/components/Authdir/logModal.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/EasyModeView',
    name: 'EasyMode-View',
    component: EasyModeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegModal
  },
  {
    path: '/login',
    name: 'login',
    component: LogModal
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
