import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/AboutView.vue'
import Portafolio from '../views/PortafolioView.vue'
import Home from '../views/HomeView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/portafolio', component: Portafolio},
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router