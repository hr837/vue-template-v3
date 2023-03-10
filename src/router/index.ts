import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'
import routes from './routes'
import { useAppStore } from '@/store/app.store'
import BlankLayout from '@/layout/BlankLayout.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// 路由解析守卫
router.beforeResolve((to) => {
  // 处理微应用模式下的布局解析 start
  // 方法1
  const appStore = useAppStore()
  if (!appStore.microApp)
    return

  if (to.name === 'NotFound')
    return

  const replaceNames = ['WorkSpaceLayout', 'BasicLayout']
  const routeComponents = to.matched[0].components
  if (!routeComponents)
    return
  const defaultComponentName = routeComponents.default?.name ?? ''
  if (replaceNames.includes(defaultComponentName))
    routeComponents.default = h(BlankLayout)
  // 处理微应用模式下的布局解析 end
})

export default router
