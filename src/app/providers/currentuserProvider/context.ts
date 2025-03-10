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
    isPending:boolean,
    isSuccess:boolean,
    isError:boolean
    currentuser?:ICurrentUser;
};
// export interface ICurrentStateContext{
//     isEmptyToken:boolean,
//     isPopulatedToken:boolean,
//     currentuser?:ICurrentUser;
// }

export interface ICurrentUserActionContext{
    //getCurrentUser:()=>Promise<ICurrentUser|null>;
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
