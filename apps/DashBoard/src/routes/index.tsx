import { createRouter, createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import DashBoard from '../pages/DashBoard/DashBoard'
import DashBoardEditor from '../pages/DashBoard/DashBoardEditor'
import EventList from '../pages/Event/EventList'
import EventEditor from '../pages/Event/EventEditor'
import QueryList from '../pages/Query/QueryList'
import UserList from '../pages/System/UserList'
import PermissionList from '../pages/System/PermissionList'
import System from '../pages/System/System'

//创建子路由
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: DashBoard,
})

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashBoard,
})

const dashboardEditRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboardEditor',
  component: DashBoardEditor,
})

const eventListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/eventList',
  component: EventList,
})

const eventEditorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/eventEditor',
  component: EventEditor,
})

const queryListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/queryList',
  component: QueryList,
})

const userListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/userList',
  component: UserList,
})

const permissionListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/permissionList',
  component: PermissionList,
})

const systemRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/system',
  component: System,
})

// 注册路由
const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  dashboardEditRoute,
  eventListRoute,
  eventEditorRoute,
  queryListRoute,
  userListRoute,
  permissionListRoute,
  systemRoute,
])

// 创建路由实例
export const router = createRouter({ routeTree })

// 声明类型
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}