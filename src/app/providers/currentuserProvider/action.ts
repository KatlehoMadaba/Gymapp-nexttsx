import { ICurrentStateContext, ICurrentUser} from './context';
import {createAction} from "redux-actions"

export enum CurrentUserEnums{
       currentUserPending="CURRENTUSER_TOKEN_EMPTY",
       currentUserTokenPopulated="CURRENTUSER_TOKEN_POPULATED",

}

export const currentUserTokenEmpty=createAction<ICurrentStateContext,ICurrentUser>(
    CurrentUserEnums.currentUserTokenEmpty,
    (currentuser:ICurrentUser)=>({
        isEmptyToken:true,
        isPopulatedToken:false,
        currentuser})
)

export const currentUserTokenPopulated=createAction<ICurrentStateContext,ICurrentUser>(
    CurrentUserEnums.currentUserTokenPopulated,
    (currentuser:ICurrentUser)=>({
        isEmptyToken:false,
        isPopulatedToken:true,
        currentuser})
)
