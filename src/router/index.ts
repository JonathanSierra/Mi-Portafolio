import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/AboutView.vue'
import Projects from '../views/ProjectsView.vue'
import Home from '../views/HomeView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects},
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router