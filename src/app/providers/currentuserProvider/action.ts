import { ICurrentStateContext, ICurrentUser} from './context';
import {createAction} from "redux-actions"

export enum CurrentUserEnums{
    getCurentUserPending="GET_CURRENTUSER_PENDING",
    getCurentUserSuccess="GET_CURRENTUSER_SUCCESS",
    getCurentUserError="GET_CURRENTUSER_ERROR"
}


export const getCurrentUserPending=createAction<ICurrentStateContext>(
       CurrentUserEnums.getCurentUserPending,
        ()=>({
        isPennding:true,
        isEror:false,
        isSuccess:false
        })
)


export const getCurrentUserError=createAction<ICurrentStateContext>(
    CurrentUserEnums.getCurentUserError,
     ()=>({
     isPennding:false,
     isEror:true,
     isSuccess:false
     })
)

export const getCurrentUserSuccess=createAction<ICurrentStateContext,ICurrentUser>(
    CurrentUserEnums.getCurentUserSuccess,
     (currentuser:ICurrentUser)=>({
     isPennding:false,
     isEror:false,
     isSuccess:true,
     currentuser
     })
)


