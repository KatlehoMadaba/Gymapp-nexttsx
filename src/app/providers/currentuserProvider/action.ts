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

// export enum CurrentUserEnums{
//        currentUserTokenEmpty="CURRENTUSER_TOKEN_EMPTY",
//        currentUserTokenPopulated="CURRENTUSER_TOKEN_POPULATED",
// }



// export const currentUserTokenEmpty=createAction<ICurrentStateContext,ICurrentUser>(
//     CurrentUserEnums.currentUserTokenEmpty,
//     (currentuser:ICurrentUser)=>({
//         isEmptyToken:true,
//         isPopulatedToken:false,
//         currentuser})
// )

// export const currentUserTokenPopulated=createAction<ICurrentStateContext,ICurrentUser>(
//     CurrentUserEnums.currentUserTokenPopulated,
//     (currentuser:ICurrentUser)=>({
//         isEmptyToken:false,
//         isPopulatedToken:true,
//         currentuser})
// )
