import BasicLayout from "./BasicLayout.vue";
import WorkSpaceLayout from "./WorkSpaceLayout.vue";
import BlankLayout from "./BlankLayout.vue";
import { Component } from "vue";

/** 工作空间包含的页面布局 */
export const appLayouts: Record<PageLayout, Component> = {
  Basic: BasicLayout,
  Blank: BlankLayout,
  WorkSpace: WorkSpaceLayout,
};
