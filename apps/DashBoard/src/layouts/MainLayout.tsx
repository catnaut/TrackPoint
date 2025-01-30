import { Layout } from 'antd'
import { Outlet } from '@tanstack/react-router'
import SiderMenu from '../container/Menu'

const { Header, Sider, Content } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 50,
  paddingInline: 24,
  lineHeight: '60px',
  backgroundColor: '#E7E9E2',
};

const contentStyle: React.CSSProperties = {
  padding: 24,
  minHeight: 'calc(100vh - 128px)',
  backgroundColor: '#F3F4EF',
  color: '#000',
  flex: 1,
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#EEEFE9',
  height: '100vh',
  overflow: 'auto',
};

const containerStyle: React.CSSProperties = {
  minHeight: '100vh',
  margin: 0,
  padding: 0,
};

export const MainLayout = () => (
  <Layout style={containerStyle}>
    <Sider width={200} style={siderStyle} breakpoint="lg" collapsedWidth="0">
      <SiderMenu />
    </Sider>
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}><Outlet /></Content>
    </Layout>
  </Layout>
) 