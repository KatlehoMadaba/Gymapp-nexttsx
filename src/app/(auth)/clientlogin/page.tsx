"use client";
import React, { useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import styles from "../../page.module.css";
import { UseClients } from "../../providers/clientProvider/index";
import {IClient} from "../../providers/clientProvider/context"


const ClientLogin = () => {
  const { isError, isPending } = UseClients();
  const { loginClient, isSuccess } = UseClients(); // Assuming loginUser is the function for client login
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
    return <div>Sorry, I couldnt log you in</div>;
  }

  const onFinish = async (values: IClient) => {
    console.log("Client login data:", values);
    loginClient(values); // Call the loginUser function for client login
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