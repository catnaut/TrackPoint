import { createRouter, createRoute } from '@tanstack/react-router'
import { rootRoute, mainLayoutRoute } from './__root'
import DashBoard from '../pages/DashBoard/DashBoard'
import DashBoardEditor from '../pages/DashBoard/DashBoardEditor'
import EventList from '../pages/Event/EventList'
import EventEditor from '../pages/Event/EventEditor'
import QueryList from '../pages/Query/QueryList'
import UserList from '../pages/System/UserList'
import PermissionList from '../pages/System/PermissionList'
import System from '../pages/System/System'
import Login from '../pages/Login/Login'

// 登录路由直接挂在根路由下
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
})

// 其他路由都挂在 mainLayout 下
const indexRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: '/',
  beforeLoad: async () => {
    const isAuthenticated = false;
    if (!isAuthenticated) {
      throw router.navigate({ to: '/login' })
    }
  },
  component: DashBoard,
})

// 修改其他路由的父路由
const dashboardRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: '/dashboard',
  component: DashBoard,
})

const dashboardEditRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: '/dashboardEditor',
  component: DashBoardEditor,
})

const eventListRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: '/eventList',
  component: EventList,
})

const eventEditorRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: '/eventEditor',
  component: EventEditor,
})

const queryListRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: '/queryList',
  component: QueryList,
})

const userListRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: '/userList',
  component: UserList,
})

const permissionListRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: '/permissionList',
  component: PermissionList,
})

const systemRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: '/system',
  component: System,
})

// 注册路由时需要先注册主布局路由
const routeTree = rootRoute.addChildren([
  loginRoute,
  mainLayoutRoute.addChildren([
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
])

// 创建路由实例
export const router = createRouter({ routeTree })

// 声明类型
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}