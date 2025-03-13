"use client";
import React, { useEffect, useState } from "react";
import { Table, Input, Button, Space, Spin, Alert } from "antd";
import { UseFoodItems } from "../../providers/foodProvider/";

const FoodItems = () => {
  const [items, setItems] = useState([]); // Use any[] for the initial state (or you can use IFoodItem[] if you have that interface)
  const { FoodItems, getallFoodItems, isPending, isSuccess, isError } = UseFoodItems();
  const [searchText, setSearchText] = useState<string>("");

  // Automatically fetch food items when the page loads
  useEffect(() => {
    getallFoodItems(); // Fetch the food items as soon as the component mounts
  }, []); // Empty dependency array means it runs once when the page loads

  useEffect(() => {
    if (isSuccess && FoodItems) {
      setItems(FoodItems); // Set the fetched food items into the state
      console.log("Fetched food items:", FoodItems);
    }
  }, [isSuccess, FoodItems]); // Runs whenever FoodItems is updated

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const filteredItems = items.filter((foodItem) => {
    return foodItem.name.toLowerCase().includes(searchText.toLowerCase()) ||
      foodItem.category.toLowerCase().includes(searchText.toLowerCase());
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
      <Space direction="vertical" size="large">
        <Button type="primary" onClick={() => getallFoodItems()} loading={isPending}>
          {isPending ? "Loading..." : "Show Food Items"}
        </Button>

        {/* Search Input */}
        <Input
          placeholder="Search by name or category"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchText}
          style={{ marginTop: 20, width: 200 }}
        />

        {/* Show loading spinner when data is pending */}
        {isPending && (
          <div style={{ textAlign: "center" }}>
            <Spin size="large" />
          </div>
        )}

        {/* Show error alert when there is an error fetching food items */}
        {isError && (
          <Alert
            message="Error fetching food items"
            type="error"
            showIcon
            style={{ marginTop: 20 }}
          />
        )}

        {/* Render table with filtered data */}
        {Array.isArray(filteredItems) && filteredItems.length > 0 ? (
          <Table
            columns={columns}
            dataSource={filteredItems}
            rowKey="id" // Assuming each food item has a unique `id`
            pagination={{ pageSize: 10 }}
          />
        ) : (
          <p>No food items available.</p>
        )}
      </Space>
    </div>
  );
};

export default FoodItems;