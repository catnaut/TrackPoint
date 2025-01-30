import { createRootRoute, Outlet, createRoute } from '@tanstack/react-router'
import { MainLayout } from '../layouts/MainLayout'

export const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

// 创建主布局路由
export const mainLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'main',
  beforeLoad: async () => {
    // 模拟登录成功
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      throw new Error('Unauthorized');
    }
  },
  onError: () => {
    window.location.href = '/login';
  },
  component: MainLayout,
})