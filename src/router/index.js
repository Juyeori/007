import { createRouter, createWebHistory } from 'vue-router'
import mainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: mainView
    },
  ]
})

export default router
