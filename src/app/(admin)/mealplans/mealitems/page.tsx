"use client";
import { useRouter } from "next/navigation";
import { Card, Row, Col } from "antd";

const meals = [
  { title: "Veggies", path: "/Veggies" },
  { title: "meat", path: "/meat" },
  { title: "fruit", path: "/fruit" },
  { title: "gnl", path: "/gnl" },
  { title: "grains", path: "/grains" },
];

const FoodItems = () => {
  const router = useRouter();

  return (
    <div style={{ padding: 50 }}>
      <Row gutter={[16, 16]} justify="center">
        {meals.map((meal) => (
          <Col key={meal.title} xs={24} sm={12} md={6} lg={6}>
            <Card
              title={meal.title}
              hoverable
              style={{ textAlign: "center" }}
              onClick={() => router.push(meal.path)}
            >
              Click to view {meal.title} options
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FoodItems ;