import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useAppStore } from '@/store/app.store'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeResolve((to) => {
  const appStore = useAppStore()
  appStore.updateLayout(to.meta.layout)
})

export default router
