import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'app1Home',
      path: '/',
      redirect: '/app1/home',
    },
  ],
})

export default router
