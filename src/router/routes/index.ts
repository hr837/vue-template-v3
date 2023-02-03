import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../../views/HomeView.vue'
import { SystemRoutes } from './system.routes'

const routesConfig: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      ignoreAuth: true,
      layout: 'Basic',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: {
      ignoreAuth: true,
      layout: 'Blank',
    },
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      ignoreAuth: true,
      layout: 'WorkSpace',
    },
    component: () => import('@/views/UserView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      ignoreAuth: true,
      layout: 'WorkSpace',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../../views/AboutView.vue'),
  },
  // {
  //   path: "/system",
  //   name: "system",
  //   component: () => import("@/layout/WorkSpaceLayout.vue"),
  //   children: SystemRoutes,
  // },
  ...SystemRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      ignoreAuth: false,
      layout: 'Blank',
    },
    component: () => import('@/views/NotFoundView.vue'),
  },
]

export default routesConfig
