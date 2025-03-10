"use client";
import React, { useState } from "react";
import { Layout, Menu, Button, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "../../page.module.css";

const { Header, Sider, Content, Footer } = Layout;

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
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: 'Create new clients',
                },
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: 'Add clients',
                },
                {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: 'Create general meals',
                },
                {
                  key: '4',
                  icon: <UploadOutlined />,
                  label: 'Profile',
                },
                {
                  key: '5',
                  icon: <UploadOutlined />,
                  label: '',
                },
              ]}
            />
          </Sider>
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