"use client"
import { useContext, useReducer } from "react";
// import { getAxiosInstace } from "../../utilis/axiosInstance";
import { 
    INITIAL_STATE, 
    IFoodItem, 
    FoodItemActionContext, 
    FoodItemStateContext 
} from "./context";
import { FoodItemReducer } from "./reducer";
import { 
    getallFoodItemsError, 
    getallFoodItemsPending,
    getallFoodItemsSuccess, 
    getFoodItemError, 
    getFoodItemPending, 
    getallFoodItemsuccess, 
    createFoodItemPending, 
    createFoodItemError, 
    updateFoodItemSuccess, 
    createFoodItemSuccess, 
    updateFoodItemPending, 
    updateFoodItemError, 
} from "./actions";
import axios from "axios";
const useFoodItemState = () => {
    const context =useContext(FoodItemStateContext);
    if (!context) {
      throw Error("Please ensure you have used the FoodItemStateContext Provider");
    }
    return context;
  };
  
   const useFoodItemActionState = () => {
    const context = useContext(FoodItemActionContext);;
    if (!context) {
      throw Error("Please ensure you have used the FoodItemActionContext Provider");
    }
    return context;
  };
  const UseFoodItems = () => {
    return {
      ...useFoodItemState(),
      ...useFoodItemActionState(),
    };
  };
  export { UseFoodItems };

  const FoodItemProvider = ({children}: {children: React.ReactNode}) => {

    const [state, dispatch] = useReducer(FoodItemReducer, INITIAL_STATE);
    // const instance = getAxiosInstace();

    const getallFoodItems = async() => {
        // const token=sessionStorage.getItem("jwtToken");
         const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Y2FhMWM3ZjQ4MzY0MDAxOTVkYTE2OCIsIm5hbWUiOiJ0ZXN0IHRyYWluZXIgMiIsInJvbGUiOiJhZG1pbiIsImZlYXR1cmVzIjpbXSwiaWF0IjoxNzQxMzM3NjAxLCJleHAiOjE3NDE5NDI0MDF9.JFQUc66Czls-WRAirbQ1usByTFWyoh9sJtIWt6IOByU"
        console.log("this is the token getClients:",token)
        dispatch(getallFoodItemsPending());
        if(!token){
            console.error("There is no token for allfood items avaiable")
            return
        }
        const authHeader=token.startsWith("Bearer") ? token : `Bearer ${token}`;
        console.log("token from create client:",authHeader)
        const endpoint="https://body-vault-server-b9ede5286d4c.herokuapp.com/api/food";
       try{
        console.log('Getting aLL the food items');
          const response=await axios.get(endpoint,{
            headers:{
              Authorization: authHeader,
            },
          });
          dispatch(getallFoodItemsSuccess(response.data));
          console.log("Geting the all the food itemas was a success",response.data)
       }catch(error){
        console.error("Error fetching clients:", error);
        dispatch(getallFoodItemsError());
       }
    }; 

    const getFoodItem = async(id: string) => {
        dispatch(getFoodItemPending());
        const endpoint = `/FoodItems/${id}`;
        await axios.get(endpoint)
        .then((response) => {
            dispatch(getallFoodItemsuccess(response.data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(getFoodItemError());
        });
    }       

    const createFoodItem = async(FoodItem: IFoodItem) => {
        dispatch(createFoodItemPending());
        const endpoint = `/FoodItems`;
        await axios.post(endpoint, FoodItem)
        .then((response) => {
            dispatch(createFoodItemSuccess(response.data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(createFoodItemError());
        });
    }

    const updateFoodItem = async( FoodItem: IFoodItem) => {
        dispatch(updateFoodItemPending());
        const endpoint = `/FoodItems/${FoodItem?._id}`;
        await axios.put(endpoint, FoodItem)
        .then((response) => {
            dispatch(updateFoodItemSuccess(response.data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(updateFoodItemError());
        });
    }
    return(
        <FoodItemStateContext.Provider value={state}>
            <FoodItemActionContext.Provider value={{getallFoodItems, getFoodItem, createFoodItem, updateFoodItem}}>
                {children}
            </FoodItemActionContext.Provider>
        </FoodItemStateContext.Provider>
    )
   
};

export default FoodItemProvider

