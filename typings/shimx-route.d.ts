import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    /**
     * 是忽略身份权限
     * @description 默认不忽略身份验证
     */
    ignoreAuth?: boolean;
  }
}
