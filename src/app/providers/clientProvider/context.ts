"use client"
import { createContext } from "react";
export interface IClient{
    name:string;
    email:string;
    password?:string;
    confirmpassword?:string;
    role?:string;
    contactNumber?:string;
    planType?:string;
    activeState?:boolean;
    trial?:boolean;
    policiesAccepted?:boolean;
    message?:string;
    dateOfBirth:string;
}

export interface IClientLogin{
    email:string;
    password:string;
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
    Clients?:IClient[];
    readonly ClientCreated?:IClient;
}

 export interface IClientActionContext{
    createClient:(Client:IClient)=>void;
    loginClient:(Client:IClientLogin)=>void;
    registerationClient:(Client:IClient)=>void;
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
