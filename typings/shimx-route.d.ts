import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    // 是忽略身份权限
    ignoreAuth: boolean;
    // 默认为WorkSpace
    layout?: PageLayout;
  }
}
