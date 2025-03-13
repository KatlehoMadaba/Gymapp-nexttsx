"use client"
import { createContext } from "react";
export interface IMealPlan{
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
export interface IMealPlanStateContext {
    isPending: boolean;  
    isSuccess: boolean;  
    isError: boolean;    
    MealPlan?: IMealPlan;  
    MealPlans?: IMealPlan[];
  }

  export interface IMealPlanActionContext {
    getallMealPlans: () => void;
    getMealPlan: (id: string) => void; 
    createMealPlan: (MealPlan: IMealPlan) => void;  
    getMealItems: (MealPlan: IMealPlan) => void;         
    getMealItem: (MealPlan: IMealPlan) => void;         
  }

export const INITIAL_STATE: IMealPlanStateContext = {
    isPending: false,  
    isSuccess: false,  
    isError: false, 
  };
  

export const MealPlanStateContext =
  createContext<IMealPlanStateContext>(INITIAL_STATE);


export const MealPlanActionContext =
  createContext<IMealPlanActionContext>(undefined);