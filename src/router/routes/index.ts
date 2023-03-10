import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../../views/HomeView.vue'
import { SystemRoutes } from './system.routes'
import BlankLayout from '@/layout/BlankLayout.vue'
import WorkSpaceLayout from '@/layout/WorkSpaceLayout.vue'
import BasicLayout from '@/layout/BasicLayout.vue'

const routesConfig: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: BlankLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue'),
      },
    ],
  },
  {
    path: '/basic',
    component: BasicLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: HomeView,
      },
    ],
  },
  {
    path: '/workspace',
    component: WorkSpaceLayout,
    children: [
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/UserView.vue'),
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../../views/AboutView.vue'),
      },
    ],
  },
  {
    path: '/system',
    component: WorkSpaceLayout,
    redirect: { name: 'users' }, // 此处可以不写跳转
    children: SystemRoutes,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
  },
]

export default routesConfig
