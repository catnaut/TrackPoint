import { Layout } from 'antd'

const { Header, Content, Footer, Sider } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 24,
  lineHeight: '64px',
  backgroundColor: '#001529',
};

const contentStyle: React.CSSProperties = {
  padding: 24,
  minHeight: 'calc(100vh - 128px)',
  backgroundColor: '#fff',
  color: '#000',
  flex: 1,
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#001529',
  height: '100vh',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#999',
  height: 64,
  padding: '24px 50px',
  backgroundColor: '#f0f2f5',
};

const containerStyle: React.CSSProperties = {
  minHeight: '100vh',
  margin: 0,
  padding: 0,
};

function App() {
  return (
    <Layout style={containerStyle}>
      <Sider 
        width={200} 
        style={siderStyle}
        breakpoint="lg"
        collapsedWidth="0"
      >
        Sider
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default App
