"use client";
import { Layout, theme } from "antd";

import "../page.module.css";



const { Content, Footer } = Layout;

export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
        <Layout style={{ minHeight: "100vh" }}>
          <Content style={{ padding: "48px 24px" }}>
            <div
              style={{
                padding: 24,
                minHeight: 380,
                maxWidth: 1200,
                margin: "0 auto",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Gym App ©{new Date().getFullYear()}
          </Footer>
        </Layout>
  );
}


