import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: '/app1/home',
    },
    {
      path: '/app1/home',
      name: 'app1Home',
      component: HomeView,
    },
  ],
})

export default router
