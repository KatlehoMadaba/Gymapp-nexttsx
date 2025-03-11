import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Layout, Button } from "antd";
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons";
const { Sider } = Layout;
const MySider = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const handleclearsession=()=>{
    sessionStorage.clear()
    router.push("/")
  }
  
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <div style={{ padding: '16px' }}>
        {/* Create New Clients Button */}
        <Button
          type="default"
          icon={<UserOutlined />}
          style={{ width: '100%', marginBottom: '10px' }}
          onClick={() => { router.push("/createclient"); }}
        >
          Create new clients
        </Button>

        {/* Other Buttons */}
        <Button
          type="default"
          icon={<VideoCameraOutlined />}
          style={{ width: '100%', marginBottom: '10px' }}
          onClick={() => { /* Handle Add clients */ }}
        >
          Add clients
        </Button>

        <Button
          type="default"
          icon={<UploadOutlined />}
          style={{ width: '100%', marginBottom: '10px' }}
          onClick={() => { /* Handle Profile */ }}
        >
          Profile
        </Button>

         {/* Other Buttons */}
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