import { useUserStore } from '@/store/user.store'

/** 获取请求头 */
export const getAuthorization = () => {
  const userStore = useUserStore()
  return { 'X-UserToken': `bearer ${userStore.token}` }
}
