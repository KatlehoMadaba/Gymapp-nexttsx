import { createContext } from "react";
export interface ICurrentUser{
    status:number;
    message:string;
    data?:{
        id: string;
        name: string;
        email: string;
        password?:string;
        role: string;
        contactNumber: string;
        dateOfBirth?:string;
        activeState: boolean;
        planType: string;
        trial: boolean;
        policiesAccepted?:boolean
        date?:string;
    };
    currentuser?:ICurrentUser
}
export interface ICurrentStateContext{
    isPending:boolean,
    isSuccess:boolean,
    isError:boolean
    currentuser?:ICurrentUser;
};


export interface ICurrentUserActionContext{    
    getCurrentUser:()=>void;

}

export const INITIAL_STATE:ICurrentStateContext={
    isPending:false,
    isSuccess:false,
    isError:false,
}
 export const CurrentUserStateContext=
    createContext<ICurrentStateContext>(INITIAL_STATE);

export const CurrentUserActionContext=
    createContext<ICurrentUserActionContext>(undefined);
