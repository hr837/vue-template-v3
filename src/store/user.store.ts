import { defineStore } from 'pinia'
import type { MenuData } from '@/types/work-tree.type'

interface State {
  // 用户token
  token: string
  // UserId
  id: string
  /** 子菜单列表 */
  subMenuList: MenuData[]
}

const initialState: State = {
  id: '',
  token: '',
  /** 子菜单列表 */
  subMenuList: [],
}

export const useUserStore = defineStore('user', {
  state: () => initialState,
  actions: {
    /**
     * 更新系统状态
     */
    updateToken(token: string) {
      this.token = token
    },
    updateUserInfo(user: { id: string; name: string }) {
      this.id = user.id
    },
  },
  getters: {
    /** 检测用户是否拥有此菜单权限 */
    hasMenuRole() {
      /**
       * @param path 要检测的菜单路径
       */
      return (path: string) => {
        return this.subMenuList.findIndex(x => x.path === path) > -1
      }
    },
  },
  persist: true,
})
