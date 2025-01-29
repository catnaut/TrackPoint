import { createRootRoute, Outlet, createRoute } from '@tanstack/react-router'
import { MainLayout } from '../layouts/MainLayout'

export const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

// 创建主布局路由
export const mainLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'main',
  component: MainLayout,
})