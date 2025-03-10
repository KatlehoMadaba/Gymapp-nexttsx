import {handleActions} from "redux-actions"
import { CurrentUserEnums } from "./action";
import { INITIAL_STATE, ICurrentStateContext} from './context';


export const CurrentUserReducer=handleActions<ICurrentStateContext,ICurrentStateContext>({
    [ CurrentUserEnums.currentUserTokenEmpty]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
    [ CurrentUserEnums.currentUserTokenPopulated]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
},INITIAL_STATE)
    
