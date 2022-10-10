import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: () => import('../views/HelloWorld.vue')
    }
  ]
})

export default router
