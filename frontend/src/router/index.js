import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '../pages/AuthPage.vue'
import OrderPage from '../pages/OrderPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: AuthPage
    },
    {
      path: '/order',
      name: 'order',
      component: OrderPage
    },
  ]
})

export default router
