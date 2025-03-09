"use client"
import { createContext } from "react";
export interface ITrainer{
    name:string;
    email:string;
    password:string;
    confirmpassword?:string;
    role:string;
    contactNumber:string;
    planType:string;
    activeState:boolean;
    trial:boolean;
    policiesAccepted:boolean;
    message?:string;
}

export interface ITrainerLogin{
    email:string;
    password:string;
}
export interface ILoginResponse{
    status:number,
    message:string,
    data:{
        token:string
    }
}
export interface ICurrentUserResponse{
    status:number;
    message:string;
    data:{
        id: string;
        name: string;
        email: string;
        role: string;
        contactNumber: string;
        activeState: boolean;
        planType: string;
        trial: boolean;
        date: string;
    };
}
export interface ITrainerStateContext{
    isPending:boolean;
    isSuccess:boolean;
    isError:boolean;
    Trainer?:ITrainer;
    Trainers?:ITrainer[];
    readonly TrainerCreated?:ITrainer;
}

 export interface ITrainerActionContext{
    getTrainer:()=>Promise<ICurrentUserResponse|null>;
    createTrainer:(Trainer:ITrainer)=>void;
    loginTrainer:(Trainer:ITrainerLogin)=>void;
 }

 export const INITIAL_STATE:ITrainerStateContext={
    isPending:false,
    isSuccess:false,
    isError:false,
 }

 export const TrainerStateContext=
    createContext<ITrainerStateContext>(INITIAL_STATE);

export const TrainerActionContext=
    createContext<ITrainerActionContext>(undefined);
