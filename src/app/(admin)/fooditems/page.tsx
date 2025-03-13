"use client";
import React, { useEffect, useState } from "react";
import { Table, Spin, Alert } from "antd";
import { UseFoodItems } from "../../providers/foodProvider/";

const FoodItems = () => {
  const [items, setItems] = useState([]);
  const { FoodItems, isPending, isError, getallFoodItems } = UseFoodItems();

  // Automatically fetch food items when the page loads
  useEffect(() => {
    getallFoodItems(); // Fetch the food items as soon as the component mounts
  }, []); // Empty dependency array means it runs once when the page loads

  useEffect(() => {
    if (FoodItems) {
      setItems(FoodItems); // Set the fetched food items into the state
      console.log("Fetched food items:", FoodItems);
    }
  }, [FoodItems]); // Runs whenever FoodItems is updated

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Serving Size",
      dataIndex: "servingSize",
      key: "servingSize",
    },
    {
      title: "Protein (g)",
      dataIndex: "protein",
      key: "protein",
    },
    {
      title: "Carbs (g)",
      dataIndex: "carbs",
      key: "carbs",
    },
    {
      title: "Sugar (g)",
      dataIndex: "sugar",
      key: "sugar",
    },
    {
      title: "Fat (g)",
      dataIndex: "fat",
      key: "fat",
    },
    {
      title: "Fiber (g)",
      dataIndex: "fiber",
      key: "fiber",
    },
    {
      title: "Sodium (mg)",
      dataIndex: "sodium",
      key: "sodium",
    },
    {
      title: "Potassium (mg)",
      dataIndex: "potassium",
      key: "potassium",
    },
    {
      title: "Cholesterol (mg)",
      dataIndex: "cholesterol",
      key: "cholesterol",
    },
    {
      title: "Energy (kcal)",
      dataIndex: "energy",
      key: "energy",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Food Items</h1>

      {isPending && (
        <div style={{ textAlign: "center" }}>
          <Spin size="large" />
        </div>
      )}

      {isError && (
        <Alert
          message="Error fetching food items"
          type="error"
          showIcon
          style={{ marginTop: 20 }}
        />
      )}

      {Array.isArray(items) && items.length > 0 ? (
        <Table
          columns={columns}
          dataSource={items}
          rowKey={(record) => record.id} // Assuming each food item has a unique `id` field
          pagination={{ pageSize: 10 }}
        />
      ) : (
        <p>No food items available.</p>
      )}
    </div>
  );
};

export default FoodItems;