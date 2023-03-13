import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'
import routes from './routes'
import { useAppStore } from '@/store/app.store'
import BlankLayout from '@/layout/BlankLayout.vue'
import { close, start } from '@/config/nporgress.config'
import { isAuthenticated } from '@/composables'
import { useUserStore } from '@/store/user.store'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  start()
  // 权限检测 // 路由配置需要权限
  if (to.meta.ignoreAuth !== false && to.name !== 'login') {
    // 但是 未授权
    if (!isAuthenticated())
      return { name: 'login' }

    // 已授权，检测用户菜单权限
    if (useUserStore().hasMenuRole(to.path))
      return { name: 'Forbidden' }
  }
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

router.afterEach(() => {
  close()
})

export default router
