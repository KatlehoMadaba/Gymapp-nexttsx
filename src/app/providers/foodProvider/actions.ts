import { createAction } from "redux-actions";
import { IFoodItem, IFoodItemStateContext } from "./context";

export enum FoodItemActionEnums {
  
  getFoodItemsPending = "GET_FoodItemS_PENDING",
  getFoodItemsSuccess = "GET_FoodItemS_SUCCESS",
  getFoodItemsError = "GET_FoodItemS_ERROR",

  getFoodItemPending = "GET_FoodItem_PENDING",
  getFoodItemSuccess = "GET_FoodItem_SUCCESS",
  getFoodItemError = "GET_FoodItem_ERROR",

  createFoodItemPending = "CREATE_FoodItem_PENDING",
  createFoodItemSuccess = "CREATE_FoodItem_SUCCESS",
  createFoodItemError = "CREATE_FoodItem_ERROR",

  updateFoodItemPending = "UPDATE_FoodItem_PENDING",
  updateFoodItemSuccess = "UPDATE_FoodItem_SUCCESS",
  updateFoodItemError = "UPDATE_FoodItem_ERROR",

  deleteFoodItemPending = "DELETE_FoodItem_PENDING",
  deleteFoodItemSuccess = "DELETE_FoodItem_SUCCESS",
  deleteFoodItemError = "DELETE_FoodItem_ERROR",
}




export const getFoodItemsPending = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.getFoodItemsPending,
  
  () => ({ isPending: true, isSuccess: false, isError: false })
);


export const getFoodItemsSuccess = createAction<
  IFoodItemStateContext, 
  IFoodItem[]           
>(
  FoodItemActionEnums.getFoodItemsSuccess,
 
  (FoodItems: IFoodItem[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    FoodItems, 
  })
);

export const getFoodItemsError = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.getFoodItemsError,

  () => ({ isPending: false, isSuccess: false, isError: true })
);


export const getFoodItemPending = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.getFoodItemPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getFoodItemSuccess = createAction<IFoodItemStateContext, IFoodItem>(
  FoodItemActionEnums.getFoodItemSuccess,
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

export const updateFoodItemPending = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.updateFoodItemPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const updateFoodItemSuccess = createAction<
  IFoodItemStateContext,
  IFoodItem
>(FoodItemActionEnums.updateFoodItemSuccess, (FoodItem: IFoodItem) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  FoodItem,
}));

export const updateFoodItemError = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.updateFoodItemError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const deleteFoodItemPending = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.deleteFoodItemPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const deleteFoodItemSuccess = createAction<
  IFoodItemStateContext,
  IFoodItem
>(FoodItemActionEnums.deleteFoodItemSuccess, (FoodItem: IFoodItem) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  FoodItem,
}));

export const deleteFoodItemError = createAction<IFoodItemStateContext>(
  FoodItemActionEnums.deleteFoodItemError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
