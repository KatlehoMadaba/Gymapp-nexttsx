"use client"
import { createContext } from "react";


export interface IClient{
    id?:string
    fullName:string
    name?:string;
    email?:string;
    password?:string;
    confirmPassword?:string;
    role?:string;
    contactNumber?:string;
    planType?:string;
    activeState?:boolean;
    trial?:boolean;
    policiesAccepted?:boolean;
    message?:string;
    dateOfBirth:string;
    sex?:string;
    trainerid?:string;
}
export interface IExistingClientsResponse{
    data:[
    {
        invoice: {
                invoice: {
                    date: "2025-03-07T08:06:51.580Z"
                },
                invoiceHistory: []
            },
            preferences: {
                mediaStorage: true,
                existingInjuries: [],
                hereditaryConditions: [],
                workoutDays: [],
                gymEquipment: [],
                foodAllergies: []
            },
        _id: string,
        hasOnboarded: false,
        trainer: string,
        uniqueTrainerCode: string,
        contactNumber: string,
        fullName:string,
        nickname: string,
        dateOfBirth: string,
        email: string,
        sex: string,
        activeState: string,
        date: string,
        __v: 0,
        user: string 
    }
    ]  
}

export interface ILoginResponse{
    status:null;
    message:string;
    data:{
        token:string;
    }
}
export interface IClientRegResponse{
    status:number,
    message:string,
    data:{
        id:string,
        email:string,
        name:string,
        password:string,
        contactNumber:string,
        dateOfBirth:string,
        role:string;
        planType:string;
        plan:string;
        trail:string;
        policiesAccepted:boolean;
        date:string;
    }
}



export interface IClientStateContext{
    isPending:boolean;
    isSuccess:boolean;
    isError:boolean;
    Client?:IClient;
    Clients?:IExistingClientsResponse[];
    readonly ClientCreated?:IClient;
}

 export interface IClientActionContext{
    createClient:(Client:IClient)=>Promise<void>;
    loginClient:(Client:IClient)=>void;
    registerationClient:(Client:IClient)=>void;
    getClients:()=>void;
 }

 export const INITIAL_STATE:IClientStateContext={
    isPending:false,
    isSuccess:false,
    isError:false,
 }

 export const ClientStateContext=
    createContext<IClientStateContext>(INITIAL_STATE);

export const ClientActionContext=
    createContext<IClientActionContext>(undefined);
