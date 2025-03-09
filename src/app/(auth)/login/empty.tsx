"use client"
import { Layout,theme} from 'antd';
import { Outlet} from 'react-router-dom';
// const { Title, Paragraph } = Typography;
const { Content, Footer } = Layout;

const EmptyLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '48px 24px' }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            maxWidth: 1200,
            margin: '0 auto',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Demo Application ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default EmptyLayout;
