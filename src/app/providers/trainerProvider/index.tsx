"use client"
import React,{ useReducer, useContext} from "react";
import {
  TrainerStateContext,
  TrainerActionContext,
  INITIAL_STATE,
  ITrainer,
  ITrainerLogin,
  ILoginResponse,
} from "./context";
import { TrainerReducer } from "./reducer";
import { 
  createTrainerPending,
  createTrainerError,
  createTrainerSuccess,
  loginTrainerPending,
  loginTrainerError,
  loginTrainerSuccess
} from "./action";
import axios from "axios";


 const useTrainerState = () => {
  const context =useContext(TrainerStateContext);
  if (!context) {
    throw Error("Please ensure you have used the TrainerStateContext Provider");
  }
  return context;
};

 const useTrainerActionState = () => {
  const context = useContext(TrainerActionContext);;
  if (!context) {
    throw Error("Please ensure you have used the TrainerActionContext Provider");
  }
  return context;
};

const UseTrainers = () => {
  return {
    ...useTrainerState(),
    ...useTrainerActionState(),
  };
};

export { UseTrainers };

const TrainerProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(TrainerReducer, INITIAL_STATE);

    const createTrainer = async (Trainer: ITrainer) => {
        dispatch(createTrainerPending());
        //change 
        const endpoint="https://body-vault-server-b9ede5286d4c.herokuapp.com/api/users/register";
        try {
            console.log('Sending Trainer data',Trainer);
            const response=await axios.post(endpoint,Trainer);
            console.log('Response',response.data);
            dispatch(createTrainerSuccess(response.data));
            //route you to login page
        } catch (error) {
            console.error("Error during signup:",error.response?.data.message ||error)
            dispatch(createTrainerError());   
        }
    };
  const loginTrainer = async (Trainer: ITrainerLogin) => {
    dispatch(loginTrainerPending());
    const endpoint = "https://body-vault-server-b9ede5286d4c.herokuapp.com/api/users/login";
    try {
      console.log('Logging in user with:', Trainer);
      const response = await axios.post<ILoginResponse>(endpoint, Trainer);
      console.log('Login response:', response);
      //destucture at some point please 
      const token = response.data.data.token; 
      if (token) {
        console.log("this where we set the session")
        sessionStorage.setItem("jwtToken", token);
      } else {
        console.error("No token received in response");
      }
      dispatch(loginTrainerSuccess(response.data));
    } catch (error) {
      console.error("Error during login:", error.response?.data?.message || error);
      dispatch(loginTrainerError());
    }
  };
    return (
          <TrainerStateContext.Provider value={state}>
            <TrainerActionContext.Provider
              value={{createTrainer,loginTrainer }}>
              {children}
            </TrainerActionContext.Provider>
          </TrainerStateContext.Provider>
      );

}
export default TrainerProvider;


