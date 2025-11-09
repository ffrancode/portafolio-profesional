import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Skills from '@/views/Skills.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/contact', name: 'Contact', component: Contact },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/Projects.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
