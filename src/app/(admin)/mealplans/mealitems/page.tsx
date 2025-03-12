"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Row, Col, Typography, Input } from "antd";
import Image from "next/image";

const { Title } = Typography;
const { Search } = Input;

const meals = [
  { title: "Veggies", image: "/images/veggies.jpg" },
  { title: "Meat", image: "/images/meat.jpg" },
  { title: "Fruit", image: "/images/fruit.jpg" },
  { title: "Dairy", image: "/images/dairy.jpg" },
  { title: "Grains", image: "/images/grains.jpg" },
];

const FoodItems = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter meals based on search input
  const filteredMeals = meals.filter((meal) =>
    meal.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "30px", maxWidth: "1000px", margin: "auto", textAlign: "center" }}>
      {/* Page Title */}
      <Title level={2} style={{ marginBottom: "10px", fontWeight: "bold" }}>Food Items</Title>

      {/* Subheading */}
      <h2 style={{ fontSize: "1.2rem", fontWeight: "500", color: "#ffff", marginBottom: "20px" }}>
        Add food items to: <span style={{ fontWeight: "bold", color: "#fff" }}>this Category</span>
      </h2>

      {/* Search Bar */}
      <Search
        placeholder="Search for a food item..."
        allowClear
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "30px",
          width: "100%",
          maxWidth: "500px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      {/* Food Item Cards */}
      <Row gutter={[24, 24]} justify="center">
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <Col key={meal.title} xs={24} sm={12} md={8} lg={6} style={{ marginRight: "20px" }}>
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
                onClick={() => router.push(`/category?name=${meal.title.toLowerCase()}`)}
                bodyStyle={{ padding: "10px" }}
              >
                <Image
                  src={meal.image}
                  alt={meal.title}
                  width={260}
                  height={180}
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
                <h2 style={{ marginTop: "10px", fontSize: "1.5rem", fontWeight: "bold" }}>
                  {meal.title}
                </h2>
                <p style={{ fontSize: "14px", color: "#555" }}>Click to view {meal.title} options</p>
              </Card>
            </Col>
          ))
        ) : (
          <p style={{ fontSize: "16px", color: "#999" }}>No matching food items found.</p>
        )}
      </Row>
    </div>
  );
};

export default FoodItems;