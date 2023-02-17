import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    /**
     * 是忽略身份权限
     * @description 默认不忽略身份验证
     */
    ignoreAuth?: boolean;
    /**
     * 页面布局模式，默认为WorkSpace
     * @description WorkSpace 带有头部和侧边栏的布局
     * @description Basic 仅有头部的布局
     * @description Blank 独占全屏的布局
     */
    layout?: PageLayout;
  }
}
