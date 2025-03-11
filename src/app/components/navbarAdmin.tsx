import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Layout, Button } from "antd";
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons";
const { Sider } = Layout;
const MySider = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

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

        {/* Other Buttons */}
        <Button
          type="default"
          icon={<UploadOutlined />}
          style={{ width: '100%', marginBottom: '10px' }}
          onClick={() => { /* Handle Create general meals */ }}
        >
          Create general meals
        </Button>

        <Button
          type="default"
          icon={<UploadOutlined />}
          style={{ width: '100%', marginBottom: '10px' }}
          onClick={() => { /* Handle Profile */ }}
        >
          Profile
        </Button>
      </div>
    </Sider>
  );
};

export default MySider;