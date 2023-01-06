import { defineStore } from "pinia";

type State = {
  // 系统准备状态
  ready: boolean;
  // 页面标题
  title: string;
  // 是否微应用
  microApp: boolean;
  // 当前布局
  layout: PageLayout;
};

const initialState: State = {
  ready: false,
  title: "",
  microApp: false,
  layout: "WorkSpace",
};

export const useAppStore = defineStore("app", {
  state: () => initialState,
  actions: {
    /**
     * 更新系统状态
     */
    setReady() {
      this.ready = true;
    },
    /**
     * 页面标题
     */
    updateTitle(title: string) {
      this.title = title;
    },
    /** 设置应用为微应用状态 */
    setMicroState() {
      this.microApp = !this.microApp;
    },
    /** 更新页面布局 */
    updateLayout(layout: PageLayout = "WorkSpace") {
      if (this.layout === layout) return;
      this.layout = layout;
    },
  },
});
