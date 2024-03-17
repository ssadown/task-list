import LoginPage from '@/Pages/LoginPage.vue'
import TasksPage from '@/Pages/TasksPage.vue'
import CurrentTaskPage from '@/Pages/CurrentTaskPage.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PageNotFound from '@/Pages/PageNotFound.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: "/index.html",
    redirect: "/task-list" 
  },
  {
    path: '/task-list',
    component: LoginPage
  },
  {
    path: '/alltasks',
    component: TasksPage
  },
  {
    path: '/alltasks/:id',
    component: CurrentTaskPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
