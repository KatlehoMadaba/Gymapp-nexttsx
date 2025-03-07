import { createContext } from "react";
export interface ITrainer{
    name:string;
    email:string;
    password:string;
    confirmpassword:string;
    role:string;
    contactNumber:string;
    planType:string;
    activeState:boolean;
    trial:boolean;
    policiesAccepted:boolean;
    message?:string;
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
    getTrainers:()=>void;
    getTrainer:(id:string)=>void;
    createTrainer:(Trainer:ITrainer)=>void;
    updateTrainer:(Trainer:ITrainer)=>void;
    deleteTrainer:(id:string)=>void;
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
