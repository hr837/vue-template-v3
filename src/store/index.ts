import { createPinia, defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useAppStore } from './app.store'
import { useUserStore } from './user.store'

const stores = {
  app: () => useAppStore(),
  user: () => useUserStore(),
}

const store = defineStore('main', {
  getters: stores,
})

export function useStore(): ReturnType<typeof store>
export function useStore<T extends keyof typeof stores>(
  name: T
): ReturnType<typeof store>[T]
export function useStore<T extends keyof typeof stores>(
  name?: T,
): ReturnType<typeof store> | ReturnType<typeof store>[T] {
  if (name)
    return store()[name]
	 else
    return store()
}

// store
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
