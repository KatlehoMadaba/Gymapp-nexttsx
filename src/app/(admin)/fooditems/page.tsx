"use client";
import React, { useEffect } from "react";
import { Button, Space, Spin, Alert } from "antd";
import { IFoodItem } from "@/app/providers/foodProvider/context";
import { UseFoodItems } from "@/app/providers/foodProvider";

const FoodItems = () => {
  const { FoodItems, getallFoodItems, isPending, isSuccess, isError } = UseFoodItems();  
  const handleClick = () => {
    getallFoodItems(); 
  };

  useEffect(() => {
    if (isSuccess && FoodItems) {
      
      console.log("Fetched food items:", FoodItems);
    }
  }, [isSuccess, FoodItems]); 

  return (
    <div style={{ padding: "20px" }}>
      <Space direction="vertical" size="large">
       
        <Button type="primary" onClick={handleClick} loading={isPending}>
          {isPending ? "Loading..." : "Show Food Items"}
        </Button>

       
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

        <div>
          {FoodItems?.length > 0 ? (
            FoodItems.map((foodItem, index) => (
              <div key={index}>
                <p><strong>{foodItem.name}</strong></p>
                <p>Category: {foodItem.category}</p>
                <p>Serving Size: {foodItem.servingSize}</p>
                <p>Protein: {foodItem.protein}g</p>
                <p>Carbs: {foodItem.carbs}g</p>
                <p>Sugar: {foodItem.sugar}g</p>
                <p>Fat: {foodItem.fat}g</p>
                <p>Fiber: {foodItem.fiber}g</p>
                <p>Sodium: {foodItem.sodium}mg</p>
                <p>Potassium: {foodItem.potassium}mg</p>
                <p>Cholesterol: {foodItem.cholesterol}mg</p>
                <p>Energy: {foodItem.energy} kcal</p>
                <hr />
              </div>
            ))
          ) : (
            <p>No food items available.</p>
          )}
        </div>
      </Space>
    </div>
  );
};

export default FoodItems;