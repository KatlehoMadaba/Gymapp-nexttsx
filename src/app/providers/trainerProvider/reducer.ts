import {handleActions} from "redux-actions"
import { TrainerActionEnums } from "./action";
import { INITIAL_STATE, ITrainerStateContext } from './context';

export const TrainerReducer=handleActions<ITrainerStateContext,ITrainerStateContext>({
    [TrainerActionEnums.getTrainerPending]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
    [TrainerActionEnums.getTrainerSuccess]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
    [TrainerActionEnums.getTrainerError]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
    [TrainerActionEnums.getTrainersPending]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
    [TrainerActionEnums.getTrainersSuccess]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
    [TrainerActionEnums.getTrainersError]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
    [TrainerActionEnums.createTrainerPending]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
    [TrainerActionEnums.createTrainerSuccess]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
    [TrainerActionEnums.createTrainerError]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
    [TrainerActionEnums.loginTrainerPending]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
    [TrainerActionEnums.loginTrainerSuccess]:(state,action)=>({
        ...state,
        ...action.payload,
    }),
    [TrainerActionEnums.loginTrainerError]:(state,action)=>({
        ...state,
        ...action.payload,
    })
},INITIAL_STATE)
