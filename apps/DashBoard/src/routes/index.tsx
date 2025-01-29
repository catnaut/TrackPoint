import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import { DashBoard } from '../pages/DashBoard'
import { Setting } from '../pages/Setting'
import { User } from '../pages/User'

// 创建子路由
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: DashBoard,
})

const settingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/setting',
  component: Setting,
})

const userRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/user',
  component: User,
})

// 注册路由
const routeTree = rootRoute.addChildren([
  indexRoute,
  settingRoute,
  userRoute,
])

// 创建路由实例
export const router = createRouter({ routeTree })

// 声明类型
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}