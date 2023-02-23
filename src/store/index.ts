import { createPinia, defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useAppStore } from './app.store'
import { useUserStore } from './user.store'

const stores = {
  app: () => useAppStore(),
  user: () => useUserStore(),
}

/** store 根实例
 * @description 如果页面只使用单个store，应该只导入某个store文件。而不是导入根store
 */
export const useStore = defineStore('main', {
  getters: stores,
})

// store
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
