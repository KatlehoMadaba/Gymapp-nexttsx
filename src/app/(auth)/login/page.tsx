"use client";
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import axios,{AxiosError} from "axios";
import { useRouter } from "next/navigation";
import styles from "../../page.module.css"

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      const response = await axios.post(
        "https://body-vault-server-b9ede5286d4c.herokuapp.com/api/users/login",
        values,
        {
          withCredentials: true, // Store token in an HTTP-only cookie
        }
      );

      console.log("Login successful:", response.data);
      router.push("/dashboard"); // Redirect to dashboard after login
    } catch (err) {
        if((err as AxiosError).isAxiosError){
            setError(err.response?.data?.message || "Login failed");
        }else{
            setError("Ann error occured");
        }
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Login</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
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

export default Login;