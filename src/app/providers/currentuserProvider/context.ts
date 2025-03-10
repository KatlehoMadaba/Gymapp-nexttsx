import { createContext } from "react";
export interface ICurrentUser{
    status:number;
    message:string;
    data?:{
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
    currentuser?:ICurrentUser
}
export interface ICurrentStateContext{
    isEmptyToken:boolean,
    isPopulatedToken:boolean,
    currentuser?:ICurrentUser;
}

export interface ICurrentUserActionContext{
    //getCurrentUser:()=>Promise<ICurrentUser|null>;
    getCurrentUser:()=>Promise<ICurrentUser|null>;

}

export const INITIAL_STATE:ICurrentStateContext={
    isEmptyToken:true,
    isPopulatedToken:false,
}
 export const CurrentUserStateContext=
    createContext<ICurrentStateContext>(INITIAL_STATE);

export const CurrentUserActionContext=
    createContext<ICurrentUserActionContext>(undefined);
