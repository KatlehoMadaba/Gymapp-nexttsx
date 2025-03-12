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

export interface IClientStateContext{
    isPending:boolean;
    isSuccess:boolean;
    isError:boolean;
    Clients?:IClient[];
    Client?:IClient;
}
 export interface IClientActionContext{
    createClient:(Client:IClient)=>Promise<void>;
    loginClient:(Client:IClient)=>void;
    registerationClient:(Client:IClient)=>void;
    getClients:(trainderId2:string)=>Promise<void>;
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
