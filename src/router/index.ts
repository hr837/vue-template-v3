import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useStore } from '@/store'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeResolve((to) => {
  useStore('app').updateLayout(to.meta.layout)
})

export default router
