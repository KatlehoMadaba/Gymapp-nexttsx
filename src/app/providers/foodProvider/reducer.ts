import { handleActions } from "redux-actions";
import { INITIAL_STATE, IFoodItemStateContext } from "./context";
import { FoodItemActionEnums } from "./actions";

export const FoodItemReducer = handleActions<IFoodItemStateContext, IFoodItemStateContext>({
    [FoodItemActionEnums.getallFoodItemsPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodItemActionEnums.getallFoodItemsSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodItemActionEnums.getallFoodItemsError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodItemActionEnums.getFoodItemPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodItemActionEnums.getallFoodItemsuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodItemActionEnums.getFoodItemError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodItemActionEnums.createFoodItemPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodItemActionEnums.createFoodItemSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodItemActionEnums.createFoodItemError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodItemActionEnums.updateFoodItemPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodItemActionEnums.updateFoodItemSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodItemActionEnums.updateFoodItemError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodItemActionEnums.deleteFoodItemPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodItemActionEnums.deleteFoodItemSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [FoodItemActionEnums.deleteFoodItemError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
}, INITIAL_STATE );
