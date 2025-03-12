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
    createFoodItemSuccess, 

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
        const token=sessionStorage.getItem("jwtToken");
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
          const response=await axios.get<IFoodItem>(endpoint,{
            headers:{
              Authorization: authHeader,
            },
          });
          dispatch(getallFoodItemsSuccess(response.data?.data));
          console.log("Geting the all the food itemas was a success",response?.data?.data)
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
        const endpoint = process.env.NEXT_PUBLIC_CREATE_FOOD_ITEM_ENDPOINT
        await axios.post(endpoint, FoodItem)
        .then((response) => {
            dispatch(createFoodItemSuccess(response.data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(createFoodItemError());
        });
    }

  

    return(
        <FoodItemStateContext.Provider value={state}>
            <FoodItemActionContext.Provider value={{getallFoodItems, getFoodItem, createFoodItem}}>
                {children}
            </FoodItemActionContext.Provider>
        </FoodItemStateContext.Provider>
    )
   
};

export default FoodItemProvider

