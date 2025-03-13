import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Layout, Button } from "antd";
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons";
const { Sider } = Layout;
const MySider = () => {
  const router = useRouter();
  const [collapsed] = useState(false);
  const handleclearsession=()=>{
    sessionStorage.clear()
    router.push("/")
  }
  
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <div style={{ padding: '16px' }}>

        <Button
          type="default"
          icon={<UserOutlined />}
          style={{ width: '100%', marginBottom: '10px' }}
          onClick={() => { router.push("/createclient"); }}
        >
          Create new clients
        </Button>

        <Button
          type="default"
          icon={<VideoCameraOutlined />}
          style={{ width: '100%', marginBottom: '10px' }}
          onClick={() => {router.push("/mealplans/mealitems")}}
        >
          View Meal Items
        </Button>

        <Button
          type="default"
          icon={<VideoCameraOutlined />}
          style={{ width: '100%', marginBottom: '10px' }}
          onClick={() => { router.push("/mealplans");}}
        >
          View Meal Plans 
        </Button>
        <Button
          type="default"
          icon={<VideoCameraOutlined />}
          style={{ width: '100%', marginBottom: '10px' }}
          onClick={() => { router.push("/fooditems");}}
        >
          View food Items 
        </Button>
         <Button
          type="default"
          icon={<UploadOutlined />}
          style={{ width: '100%', marginBottom: '10px' }}
          onClick={() => {handleclearsession()}}
        >
          
          Logout
        </Button>
      </div>
    </Sider>
  );
};

export default MySider;