import { createAction } from "redux-actions";
import { IFoodItem, IFoodItemStateContext } from "./context";

export enum FoodItemActionEnums {
  
  getallFoodItemsPending = "GETALL_FoodItems_PENDING",
  getallFoodItemsSuccess = "GETALL_FoodItems_SUCCESS",
  getallFoodItemsError = "GETALL_FoodItems_ERROR",

  getFoodItemPending = "GET_FoodItem_PENDING",
  getallFoodItemsuccess = "GET_FoodItem_SUCCESS",
  getFoodItemError = "GET_FoodItem_ERROR",

  createFoodItemPending = "CREATE_FoodItem_PENDING",
  createFoodItemSuccess = "CREATE_FoodItem_SUCCESS",
  createFoodItemError = "CREATE_FoodItem_ERROR",
}

export const getallFoodItemsPending = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.getallFoodItemsPending,
  
  () => ({ isPending: true, isSuccess: false, isError: false })
);


export const getallFoodItemsSuccess = createAction<
  IFoodItemStateContext, 
  IFoodItem[]           
>(
  FoodItemActionEnums.getallFoodItemsSuccess,
 
  (FoodItems: IFoodItem[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    FoodItems, 
  })
);

export const getallFoodItemsError = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.getallFoodItemsError,

  () => ({ isPending: false, isSuccess: false, isError: true })
);


export const getFoodItemPending = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.getFoodItemPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getallFoodItemsuccess = createAction<IFoodItemStateContext, IFoodItem>(
  FoodItemActionEnums.getallFoodItemsuccess,
  (FoodItem: IFoodItem) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    FoodItem,
  })
);

export const getFoodItemError = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.getFoodItemError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const createFoodItemPending = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.createFoodItemPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createFoodItemSuccess = createAction<
  IFoodItemStateContext,
  IFoodItem
>(FoodItemActionEnums.createFoodItemSuccess, (FoodItem: IFoodItem) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  FoodItem,
}));

export const createFoodItemError = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.createFoodItemError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

