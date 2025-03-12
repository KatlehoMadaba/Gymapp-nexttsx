import { createContext } from "react";
export interface  IAuthStateContext{
    token?: string,
    isPending: boolean,
    isSuccess: boolean,
    isError: boolean,      
}

  export interface IAuthActionContext {
    registerTrainer:()=>void;
    registerClient:()=>void;
    loginTrainer:()=>void;
    loginClient:()=>void;
    logout:()=>void;
  }


export const INITIAL_STATE: IAuthStateContext = {
    isPending: false,  
    isSuccess: false,  
    isError: false, 
  };
  

export const AuthStateContext =
  createContext<IAuthStateContext>(INITIAL_STATE);


export const AuthActionContext =
  createContext<IAuthActionContext>(undefined);

