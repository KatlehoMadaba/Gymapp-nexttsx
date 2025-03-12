"use client";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Switch, DatePicker, message } from "antd";
import styles from "../../page.module.css";
import { IClient } from "../../providers/clientProvider/context";
import { UseClients } from "../../providers/clientProvider";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

const ClientRegister = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { registerationClient, isError, isPending, isSuccess } = UseClients();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Sorry, we couldnt process your registration.</div>;
  }

  const onFinish = (values: IClient) => {
    const formattedDateOfBirth = values.dateOfBirth
      ? dayjs(values.dateOfBirth).format("YYYY-MM-DD")
      : null;
    const formData = { ...values, dateOfBirth: formattedDateOfBirth };
    console.log("Created User form Submitted:", formData);
    registerationClient(formData);
    if (isSuccess) {
      message.success("Trainer registered successfully!", 2);
      form.resetFields();
      router.push("/clientlogin")
    } 
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Client Registration</h1>
        <Form
          name="clientRegister"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={onFinish}
          layout="vertical"  // Ensures labels are always on top
        >
          <Form.Item
            name="name"
            label="Full Name"
            labelCol={{ span: 24 }}
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Full Name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            labelCol={{ span: 24 }}
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            labelCol={{ span: 24 }}
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            labelCol={{ span: 24 }}
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your Password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Passwords do not match!");
                },
              }),
            ]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item
            label="Date of Birth"
            name="dateOfBirth"
            labelCol={{ span: 24 }}
            rules={[{ required: false, message: "Please select your date of birth!" }]}
          >
            <DatePicker format="YYYY-MM-DD" className="date-picker" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="contactNumber"
            label="Contact Number"
            labelCol={{ span: 24 }}
            rules={[{ required: true, message: "Please input your contact number!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Contact Number" />
          </Form.Item>

          <Form.Item
            name="policiesAccepted"
            label="Accept Policies"
            labelCol={{ span: 24 }}
            valuePropName="checked"
            rules={[{ required: true, message: "You must accept the policies to proceed!" }]}
          >
            <Switch checkedChildren="Accepted" unCheckedChildren="Not Accepted" />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </main>
    </div>
  );
};

export default ClientRegister;