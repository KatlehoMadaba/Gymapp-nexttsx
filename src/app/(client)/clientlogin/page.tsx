"use client";
import React, { useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import styles from "../../page.module.css";
import { UseUsers } from "../../providers/currentuserProvider/index";
import { IClientLogin } from "@/app/providers/currentuserProvider/context"; // Make sure to define this for the client

const ClientLogin = () => {
  const { isError, isPending } = UseUsers();
  const { loginUser, isSuccess } = UseUsers(); // Assuming loginUser is the function for client login
  const router = useRouter();
  useEffect(() => {
    if (isSuccess) {
      router.push("/client-dashboard"); // Redirect to client's dashboard after successful login
    }
  }, [router, isSuccess]);

  if (isPending) {
    return <div>Logging you in...</div>;
  }

  if (isError) {
    return <div>Sorry, I couldn't log you in</div>;
  }

  const onFinish = async (values: IClientLogin) => {
    console.log("Client login data:", values);
    loginUser(values); // Call the loginUser function for client login
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Client Login</h1>
        <Form name="login" style={{ maxWidth: 360 }} onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </main>
    </div>
  );
};

export default ClientLogin;