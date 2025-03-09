import { ITrainer, ITrainerStateContext } from "./context";
import { createAction } from "redux-actions"

export enum TrainerActionEnums {
    getTrainersPending = "GET_TrainerS_PENDING",
    getTrainersSuccess = "GET_TrainerS_SUCCESS",
    getTrainersError = "GET_TrainerS_ERROR",

    getTrainerPending = "GET_Trainer_PENDING",
    getTrainerSuccess = "GET_Trainer_SUCCESS",
    getTrainerError = "GET_Trainer_ERROR",

    createTrainerPending = "CREATE_Trainer_PENDING",
    createTrainerSuccess = "CREATE_Trainer_SUCCESS",
    createTrainerError = "CREATE_Trainer_ERROR",

    loginTrainerPending = "LOGIN_Trainer_PENDING",
    loginTrainerSuccess = "LOGIN_Trainer_SUCCESS",
    loginTrainerError = "LOGIN_Trainer_ERROR",

    updateTrainerPending = "UPDATE_Trainer_PENDING",
    updateTrainerSuccess = "UPDATE_Trainer_SUCCESS",
    updateTrainerError = "UPDATE_Trainer_ERROR",

    deleteTrainerPending = "DELETE_Trainer_PENDING",
    deleteTrainerSuccess = "DELETE_Trainer_SUCCESS",
    deleteTrainerError = "DELETE_Trainer_ERROR",

    
};

export const getTrainersPending = createAction<ITrainerStateContext>(
    TrainerActionEnums.getTrainersPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getTrainersSuccess = createAction<
    ITrainerStateContext,
    ITrainer[]>(
        TrainerActionEnums.getTrainersSuccess,
        (Trainers: ITrainer[]) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            Trainers
        })
    );

export const getTrainersError = createAction<ITrainerStateContext>(
    TrainerActionEnums.getTrainersError,
    () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getTrainerPending = createAction<ITrainerStateContext>(
    TrainerActionEnums.getTrainersPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getTrainerSuccess = createAction<
    ITrainerStateContext, ITrainer>(
        TrainerActionEnums.getTrainersSuccess,
        (Trainer: ITrainer) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            Trainer
        })
    )

export const getTrainerError = createAction<ITrainerStateContext>(
    TrainerActionEnums.getTrainersError,
    () => ({ isPending: false, isSuccess: false, isError: true })
)

export const createTrainerPending = createAction<ITrainerStateContext>(
    TrainerActionEnums.createTrainerPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
)

export const createTrainerSuccess = createAction<
    ITrainerStateContext, ITrainer>(
        TrainerActionEnums.createTrainerSuccess,
        (Trainer: ITrainer) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            Trainer
        })
    )

export const createTrainerError = createAction<
ITrainerStateContext>(
    TrainerActionEnums.createTrainerError,
    () => ({ 
        isPending: false, 
        isSuccess: false, 
        isError: true })
)

export const loginTrainerPending = createAction<
ITrainerStateContext>(
    TrainerActionEnums.createTrainerPending,
    () => ({ 
        isPending: true, 
        isSuccess: false, 
        isError: false })
)

export const loginTrainerSuccess = createAction<
    ITrainerStateContext, ITrainer>(
        TrainerActionEnums.createTrainerSuccess,
        (Trainer: ITrainer) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            Trainer
        })
    )

export const loginTrainerError = createAction<
ITrainerStateContext>(
    TrainerActionEnums.createTrainerError,
    () => ({ 
        isPending: false, 
        isSuccess: false, 
        isError: true })
)

export const deleteTrainerPending = createAction<
    ITrainerStateContext, ITrainer>(
        TrainerActionEnums.deleteTrainerPending,
        (Trainer: ITrainer) => ({
            isPending: true,
            isSuccess: false,
            isError: false,
            Trainer,
        })
    );

export const deleteTrainerSuccess = createAction<
    ITrainerStateContext, ITrainer>(
        TrainerActionEnums.deleteTrainerSuccess,
        (Trainer: ITrainer) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            Trainer,
        })
    );

export const deleteTrainerError = createAction<
    ITrainerStateContext, ITrainer>(
        TrainerActionEnums.deleteTrainerError,
        (Trainer: ITrainer) => ({
            isPending: false,
            isSuccess: false,
            isError: true,
            Trainer,
        })
    );

export const updateTrainerPending = createAction<ITrainerStateContext>(
    TrainerActionEnums.updateTrainerPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
)

export const updateTrainerSuccess = createAction<
    ITrainerStateContext, ITrainer>(
        TrainerActionEnums.updateTrainerSuccess,
        (Trainer: ITrainer) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            Trainer
        })
    )

export const updateTrainerError = createAction<ITrainerStateContext>(
  TrainerActionEnums.updateTrainerError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);