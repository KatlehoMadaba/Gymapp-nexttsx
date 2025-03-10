import {handleActions} from "redux-actions"
import { CurrentUserEnums } from "./action";
import { INITIAL_STATE, ICurrentStateContext} from './context';


export const CurrentUserReducer=handleActions<ICurrentStateContext,ICurrentStateContext>({
    [ CurrentUserEnums.getCurentUserPending]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
    [ CurrentUserEnums.getCurentUserError]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
    [ CurrentUserEnums.getCurentUserSuccess]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
},INITIAL_STATE)
    
