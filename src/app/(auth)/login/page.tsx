"use client";
import React, {useEffect}from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import styles from "../../page.module.css"
import {UseTrainers} from "../../providers/trainerProvider/index"
import { ITrainerLogin } from "@/app/providers/trainerProvider/context";
import {UseUsers} from "../../providers/currentuserProvider/index"
const Login = () => {
  const {isError,isPending}=UseUsers();
  const { loginTrainer,isSuccess} = UseTrainers();
  const router = useRouter();
  useEffect(()=>{
    if(isSuccess){
      alert("you are now logged in")
       router.push("/dashboard");//go to dashbord after success//if router is a stack it means it can store "things" which means that it can trigger a redener
      }
  },[router,isSuccess])
  if (isPending) {
    return <div>Trying to login you in...</div>;
  }
  if(isError){
    return<div>I am sorry I couldnt log you in</div>
  }
 
 
  const onFinish = async (values:ITrainerLogin) => {
    console.log("Login data:",values);
    loginTrainer(values)
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Login</h1>
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
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