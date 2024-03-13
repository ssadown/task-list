import LoginPage from '@/Pages/LoginPage.vue'
import TasksPage from '@/Pages/TasksPage.vue'
import CurrentTaskPage from '@/Pages/CurrentTaskPage.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: LoginPage
  },
  {
    path: '/alltasks',
    component: TasksPage
  },
  {
    path: '/alltasks/:id',
    component: CurrentTaskPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
