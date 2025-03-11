"use client";
import React from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Radio,
  DatePicker,
  Checkbox,
  message,
} from "antd";
//import dayjs from "dayjs";
import { IClient } from "../../providers/clientProvider/context";
import { UseClients } from "../../providers/clientProvider/index";
import { UseUsers } from "../../providers/currentuserProvider/index";
const CreateClient = () => {
  const [form] = Form.useForm();

  const { createClient, isError, isPending } = UseClients();
  const { currentuser } = UseUsers();
  if (isPending) {
    return <div>creating new user ....</div>;
  }
  if (isError) {
    return message.error("We were unable to create this user !", 2);
  }

  const onFinish = (values: IClient) => {
    console.log("Created User form Submitted:", values);
    createClient(values);
    message.success("Trainer registered successfully!", 2);
    form.resetFields();
  };

  return (
    <div>
      <Card title="Create a client" className="form-card">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Please enter your full name!" },
            ]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            label="Contact Number"
            name="contactNumber"
            rules={[
              { required: true, message: "Please enter your contact number!" },
            ]}
          >
            <Input placeholder="Enter contact number" />
          </Form.Item>

          <Form.Item
            label="Sex"
            name="sex"
            rules={[{ required: true, message: "Please select your gender!" }]}
          >
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Other</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Date of Birth"
            name="dateOfBirth"
            rules={[
              { required: false, message: "Please select your date of birth!" }
            ]}
            initialValue=" "
          >
            <DatePicker format="YYYY-MM-DD" className="date-picker" />
          </Form.Item>

          <Form.Item name="activeState" valuePropName="checked">
            <Checkbox>Active</Checkbox>
          </Form.Item>

          <Form.Item
            label="Trainer ID"
            name="trainerId"
            rules={[{ required: true, message: "Please enter trainer ID!" }]}
            initialValue={currentuser.data.id} // Default value for Trainer ID
          >
            <Input placeholder="Trainer ID" disabled />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CreateClient;
