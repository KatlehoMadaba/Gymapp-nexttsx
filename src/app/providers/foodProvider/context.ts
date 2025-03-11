"use client"
import { createContext } from "react";
export interface IFoodItem{
    _id?: string,
    name: string,
    category: string,
    servingSize: number,
    protein:number,
    carbs: number,
    sugar: number,
    fat: number,
    fiber: number,
    sodium: number,
    potassium: number,
    cholesterol: number,
    energy: number,
    date?: string,
}
export interface IFoodItemStateContext {
    isPending: boolean;  
    isSuccess: boolean;  
    isError: boolean;    
    FoodItem?: IFoodItem;  
    FoodItems?: IFoodItem[]; 
  }

  export interface IFoodItemActionContext {
    getFoodItems: () => void;      
    getFoodItem: (id: string) => void; 
    createFoodItem: (FoodItem: IFoodItem) => void;  
    updateFoodItem: (FoodItem: IFoodItem) => void;  
    deleteFoodItem: (id: string) => void;         
  }

export const INITIAL_STATE: IFoodItemStateContext = {
    isPending: false,  
    isSuccess: false,  
    isError: false,    
  };
  

export const FoodItemStateContext =
  createContext<IFoodItemStateContext>(INITIAL_STATE);


export const FoodItemActionContext =
  createContext<IFoodItemActionContext>(undefined);