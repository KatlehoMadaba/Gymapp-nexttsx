"use client"
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input,} from "antd";
import styles from "./page.module.css";
import { ITrainer } from './providers/trainerProvider/context';

const TrainerRegister = () => {
  const onFinish = (values: ITrainer) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="confirmpassword"
            rules={[{ required: true, message: "Please input your confirm password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="confirmpassword"
              placeholder="Confirm Password"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="role"
            rules={[{ required: true, message: "Please input your Userrole!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="role" />
          </Form.Item>
          <Form.Item
            name="number"
            rules={[{ required: true, message: "Please input your Usernumber!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="number" />
          </Form.Item>
          <Form.Item
            name="planType"
            rules={[{ required: true, message: "Please input your UserplanType!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="planType" />
          </Form.Item>
          
          <Form.Item
            name="activeState"
            rules={[{ required: true, message: "Please input your UseractiveState!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="activeState" />
          </Form.Item>

          <Form.Item
            name="trail"
            rules={[{ required: true, message: "Please input your Usertrail!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="trail" />
          </Form.Item>

          <Form.Item
            name="policiesAccpted"
            rules={[{ required: true, message: "Please input your UserpoliciesAccpted!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="policiesAccpted" />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </main>
    </div>
  );
};

export default TrainerRegister;
