"use client"
import React,{useEffect}from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input,Switch} from "antd";
import styles from "../../page.module.css";
import { ITrainer } from '../../providers/trainerProvider/context';
import { UseTrainers} from "../../providers/trainerProvider/index"
const TrainerRegister = () => {
  //const { createTrainer,Trainers, isPending, isError,getTrainers, deleteTrainer, updateTrainer,TrainerCreated } = UseTrainers();
  const { createTrainer ,isError,isPending, TrainerCreated} = UseTrainers();

  // useEffect(() => {
  //   getTrainers();
  // }, []);

  useEffect(()=>{
    if(TrainerCreated!=null){
      console.log(TrainerCreated,"from sign up page");
    }
  },[TrainerCreated])

  if (isPending) {
    return <div>Loading trainers...</div>;
  }

  // Show error state
  if (isError) {
    return <div>Error loading trainers!</div>;
  }
  const onFinish = (values: ITrainer) => {
    console.log("Received values of form: ", values);
      createTrainer(values) 
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
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
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
            name="confirmPassword"
            dependencies={['password']}
            rules={[{ required: true, message: "Please input your Password!" },
            ({getFieldValue})=>({
              validator(_,value){
                if(!value || getFieldValue('password')===value){
                  return Promise.resolve();
                }
                return Promise.reject("You passwords are not matching!")
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
            rules={[{ required: true, message: "Please input your role!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="role" />
          </Form.Item>
          <Form.Item
            name="contactNumber"
            rules={[{ required: true, message: "Please input your contact number!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="number" />
          </Form.Item>
          <Form.Item
            name="activeState"  
            valuePropName="checked"
            rules={[{ required: true, message: "Please input your activeState!" }]}
          >
            <Switch checkedChildren="true" unCheckedChildren="false" />
            
            {/* <Input prefix={<UserOutlined />} placeholder="activeState" /> */}
          </Form.Item>

          <Form.Item
            name="planType"
            rules={[{ required: true, message: "Please input your planType!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="planType" />
          </Form.Item>
      
          <Form.Item
            name="trial"
            valuePropName="checked"
            rules={[{ required: true, message: "Please input your trial!" }]}
          >
            {/* <Input prefix={<UserOutlined />} placeholder="trail" /> */}
          <Switch checkedChildren="true" unCheckedChildren="false" />
          </Form.Item>

          <Form.Item
            name="policiesAccepted"
            valuePropName="checked"
            rules={[{ required: true, message: "Policies not accpeted you cant move own with out accepting!" }]}
          >
            {/* <Input prefix={<UserOutlined />} placeholder="policiesAccpted" /> */}
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
