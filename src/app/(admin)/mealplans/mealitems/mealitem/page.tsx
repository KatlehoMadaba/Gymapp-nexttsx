"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, Row, Col, Typography, Input } from "antd";

const { Title } = Typography;
const { Search } = Input;

// Sample food items for each category
const foodItems = {
  veggies: ["Carrots", "Spinach", "Broccoli", "Lettuce", "Cabbage"],
  meat: ["Chicken", "Beef", "Pork", "Lamb", "Fish"],
  fruit: ["Apples", "Bananas", "Oranges", "Grapes", "Mangoes"],
  dairy: ["Milk", "Cheese", "Yogurt", "Butter", "Cream"],
  grains: ["Rice", "Wheat", "Oats", "Corn", "Barley"],
};

const CategoryPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("name")?.toLowerCase();
  const [searchTerm, setSearchTerm] = useState("");

  // Get food items for the selected category
  const items = foodItems[category] || [];

  // Filter items based on search input
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "auto", textAlign: "center" }}>
      <Title level={2} style={{ marginBottom: "20px" }}>{category?.toUpperCase()} Options</Title>
      <h1>Search for the items under this category</h1>
      {/* Search Bar */}
      <Search
        placeholder={`Search in ${category}...`}
        allowClear
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "30px", width: "100%", maxWidth: "500px" }}
      />

      {/* Food Items List */}
      <Row gutter={[16, 16]} justify="center">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card hoverable style={{ textAlign: "center", padding: "10px" }}>
                {item}
              </Card>
            </Col>
          ))
        ) : (
          <p>No matching items found.</p>
        )}
      </Row>
    </div>
  );
};

export default CategoryPage;