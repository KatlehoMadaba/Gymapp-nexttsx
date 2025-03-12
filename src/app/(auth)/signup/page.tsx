"use client"
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Switch } from "antd";
import styles from "../../page.module.css";
import { ITrainer } from '../../providers/trainerProvider/context';
import { UseTrainers } from "../../providers/trainerProvider/index";
// import { useRouter } from "next/navigation";

const TrainerRegister = () => {
  const { createTrainer, isError, isPending } = UseTrainers();

  if (isPending) {
    return <div>Loading trainers...</div>;
  }

  if (isError) {
    return <div>Sorry I couldnt sign you up</div>;
  } else {
    console.log("Well done, you have signed up!");
  }

  const onFinish = (values: ITrainer) => {
    console.log("Received values of form: ", values);
    createTrainer(values);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Sign Up as a Trainer</h1> {/* Added heading here */}
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={['password']}
            rules={[{ required: true, message: "Please input your Password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject("You passwords are not matching!");
              }
            })
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="confirmPassword"
            />
          </Form.Item>

          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: "Please input your role!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="role" />
          </Form.Item>

          <Form.Item
            name="contactNumber"
            label="Contact Number"
            rules={[{ required: true, message: "Please input your contact number!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="number" />
          </Form.Item>

          <Form.Item
            name="activeState"
            label="Active State"
            valuePropName="checked"
            rules={[{ required: true, message: "Please input your activeState!" }]}
          >
            <Switch checkedChildren="true" unCheckedChildren="false" />
          </Form.Item>

          <Form.Item
            name="planType"
            label="Plan Type"
            rules={[{ required: true, message: "Please input your planType!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="planType" />
          </Form.Item>

          <Form.Item
            name="trial"
            label="Trial"
            valuePropName="checked"
            rules={[{ required: true, message: "Please input your trial!" }]}
          >
            <Switch checkedChildren="true" unCheckedChildren="false" />
          </Form.Item>

          <Form.Item
            name="policiesAccepted"
            label="Policies Accepted"
            valuePropName="checked"
            rules={[{ required: true, message: "Policies not accepted you can't move on without accepting!" }]}
          >
            <Switch checkedChildren="true" unCheckedChildren="false" />
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