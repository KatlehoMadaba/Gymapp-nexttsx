"use client";
import React, { useState } from "react";
import { Layout, Button, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import "../../page.module.css";
import MySider from "../../components/navbarAdmin"
const { Header, Content, Footer } = Layout;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
        <Layout style={{ minHeight: "100vh" }}>
          {/* Sidebar */}
          <MySider/>
          <Layout>
            {/* Header */}
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 16,
                paddingRight: 16,
              }}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
              <div>Logo/Other Elements</div>
            </Header>

            {/* Main Content */}
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

            {/* Footer */}
            <Footer style={{ textAlign: "center" }}>
              Gym App ©️{new Date().getFullYear()}
            </Footer>
          </Layout>
        </Layout>
  );
}