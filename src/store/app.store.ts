import { defineStore } from 'pinia'

interface State {
  /** 系统准备状态 */
  ready: boolean
  /** 页面标题 */
  title: string
  /** 是否微应用 */
  microApp: boolean
  /** 是否显示左侧菜单 */
  showAside: boolean
  // 是否显示 二级菜单树
  showWorkMenuTree: boolean
}

const initialState: State = {
  ready: false,
  title: '',
  microApp: false,
  showAside: false,
  showWorkMenuTree: false,
}

export const useAppStore = defineStore('app', {
  state: () => initialState,
  actions: {
    /**
     * 更新系统状态
     */
    setReady() {
      this.ready = true
    },
    /**
     * 页面标题
     */
    updateTitle(title: string) {
      this.title = title
    },
    /** 设置应用为微应用状态 */
    setMicroState() {
      this.microApp = !this.microApp
    },
    /** 设置左侧菜单可见性 */
    setAsideVisible(visible: boolean) {
      this.showAside = visible
    },
    /** 设置左侧菜单可见性 */
    setWorkMenuVisible(visible: boolean) {
      this.showWorkMenuTree = visible
    },
  },
  persist: {
    storage: sessionStorage,
  },
})
