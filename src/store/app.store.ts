import { defineStore } from 'pinia'

interface State {
  /** 系统准备状态 */
  ready: boolean
  /** 页面标题 */
  title: string
  /** 是否微应用 */
  microApp: boolean
  /** 当前布局 */
  layout: PageLayout
  /** 是否显示左侧菜单 */
  showAside: boolean
}

const initialState: State = {
  ready: false,
  title: '',
  microApp: false,
  layout: 'WorkSpace',
  showAside: true,
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
    /** 更新页面布局 */
    updateLayout(layout: PageLayout = 'WorkSpace') {
      if (this.layout === layout)
        return
      this.layout = layout
    },
    /** 设置左侧菜单可见性 */
    setAsideVisible(visible: boolean) {
      this.showAside = visible
    },
  },
  persist: {
    storage: sessionStorage,
  },
})
