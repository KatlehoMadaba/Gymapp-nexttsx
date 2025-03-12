"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Card, Row, Col, Button, Modal, Form, Input as AntInput, Typography } from "antd";
import Image from "next/image";

const { Search } = Input;
const { Title } = Typography;

const initialFoodCategories = [
  { name: "Breakfast", path: "/breakfast", image: "/images/breakfast.jpg" },
  { name: "Lunch", path: "/lunch", image: "/images/lunch.jpg" },
  { name: "Dinner", path: "/dinner", image: "/images/dinner.jpg" },
  { name: "Snack", path: "/snack", image: "/images/snack.jpg" },
  { name: "Dessert", path: "/dessert", image: "/images/dessert.jpg" },
  { name: "Beverages", path: "/beverages", image: "/images/beverages.jpg" },
];

const Mealplans = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foodCategories, setFoodCategories] = useState(initialFoodCategories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const router = useRouter();

  const filteredCategories = foodCategories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddMealType = (values: { name: string; image: string }) => {
    const newCategory = {
      name: values.name,
      path: `/${values.name.toLowerCase()}`,
      image: values.image || "/images/default.jpg",
    };
    setFoodCategories([...foodCategories, newCategory]);
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto", textAlign: "center" }}>
      <h1>Meal plans for username</h1>
      {/* Page Title */}
      <Title level={2} style={{ marginBottom: "30px", fontWeight: "bold", textAlign: "center" }}>
        Meal Plans
      </Title>

      {/* Search Bar */}
      <Search
        placeholder="Search food category..."
        allowClear
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "20px", width: "80%", maxWidth: "600px" }}
      />

      {/* Add Meal Type Button */}
      <Button
        type="primary"
        onClick={() => setIsModalOpen(true)}
        style={{
          marginBottom: "30px",
          backgroundColor: "#1890ff",
          borderColor: "#1890ff",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "all 0.3s",
        }}
      >
        + Add Meal Type
      </Button>

      {/* Meal Type Cards */}
      <Row gutter={[24, 24]} justify="center">
        {filteredCategories.map((category) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={6}
            key={category.name}
            style={{ marginRight: "20px" }} // Added right margin for more space
          >
            <Card
              hoverable
              style={{
                width: 260,
                height: 320,
                textAlign: "center",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
                border: "1px solid #d9d9d9",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s",
                margin: "auto",
              }}
              onClick={() => router.push(category.path)}
              bodyStyle={{ padding: "10px" }}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={260}
                height={180}
                style={{
                  objectFit: "cover",
                  borderRadius: "10px 10px 0 0",
                }}
              />
              <h2 style={{ marginTop: "10px", fontSize: "1.5rem", fontWeight: "bold" }}>
                {category.name}
              </h2>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal Form for Adding Meal Type */}
      <Modal
        title="Add New Meal Type"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleAddMealType}>
          <Form.Item
            label="Meal Type Name"
            name="name"
            rules={[{ required: true, message: "Please enter a meal type name!" }]}
          >
            <AntInput placeholder="e.g. Brunch" />
          </Form.Item>

          <Form.Item
            label="Image URL"
            name="image"
            rules={[{ required: false, message: "Enter an image URL (optional)" }]}
          >
            <AntInput placeholder="e.g. https://example.com/image.jpg" />
          </Form.Item>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                marginRight: "10px",
                backgroundColor: "#52c41a",
                borderColor: "#52c41a",
                fontWeight: "bold",
              }}
            >
              Add
            </Button>
            <Button onClick={() => setIsModalOpen(false)} style={{ fontWeight: "bold" }}>
              Cancel
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default Mealplans;