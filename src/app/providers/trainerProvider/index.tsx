"use client"
import React,{ useReducer, useContext} from "react";
import {
  TrainerStateContext,
  TrainerActionContext,
  INITIAL_STATE,
  ITrainer,
} from "./context";
import { TrainerReducer } from "./reducer";
import { 
  getTrainersError, 
  getTrainersPending, 
  getTrainersSuccess,
  getTrainerSuccess ,
  createTrainerPending,
  createTrainerError} from "./action";
// import { getTrainerError, 
//     getTrainerPending, 
//     getTrainersError, 
//     getTrainersPending, 
//     getTrainersSuccess,
//     getTrainerSuccess ,
//     createTrainerPending,
//     createTrainerSuccess,
//     createTrainerError} from "./action";
//import axios,{AxiosError} from "axios";


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

    const getTrainers = async () => {
        dispatch(getTrainersPending());
        const endpoint = ``;
        try {
            const response=await axios.get(endpoint)
            const record =response.data["data"];
            dispatch(getTrainersSuccess(record));
    
        } catch(error){
                console.error(error);
                dispatch(getTrainersError());
            };
    }
    const getTrainer = async (id: string) => {
      return id;
    };
    
    const createTrainer = async (Trainer: ITrainer) => {
        dispatch(createTrainerPending());
        const endpoint="https://body-vault-server-b9ede5286d4c.herokuapp.com/api/users/register";
        try {
            console.log('SEending Trainer data',Trainer);
            const response=await axios.post(endpoint,Trainer);
            console.log('Response',response.data)
            const record=response.data["data"]
            dispatch(getTrainerSuccess(record));
        } catch (error) {
                if(error.response?.data?.message){

                    console.error('API ERROR:',error.response.data.message)
                }
            else{
                console.error('Error creating users:',error);

            }
            dispatch(createTrainerError());   
        }
    };
    const deleteTrainer = async (id: string) => {
      return id
    };
    const updateTrainer = async (Trainer: ITrainer) => {
      return Trainer
    };

    return (
        <div>
          <TrainerStateContext.Provider value={state}>
            <TrainerActionContext.Provider
              value={{ getTrainers, getTrainer, createTrainer, updateTrainer, deleteTrainer }}
             
            >
              {children}
            </TrainerActionContext.Provider>
          </TrainerStateContext.Provider>
        </div>
      );

}
export default TrainerProvider;


