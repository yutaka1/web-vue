import { createRouter, createWebHistory } from 'vue-router'
import Category from '@/components/Category.vue'



const routes = [
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/',
    name: 'Home',
    component: Category,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router