import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import OrdrView from '@/pages/OrdrView.vue'
import MakeView from '@/pages/MakeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ordr',
      name: 'ordr',
      component: OrdrView
    },
    {
      path: '/make',
      name: 'make',
      component: MakeView
    }
  ]
})

export default router
