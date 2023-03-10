import type { RouteRecordRaw } from 'vue-router'

export const SystemRoutes: Array<RouteRecordRaw> = [
  {
    path: 'organize/users',
    name: 'users',
    component: () => import('@/views/system/organizational-management/OrganizationUsersView.vue'),
  },
]
