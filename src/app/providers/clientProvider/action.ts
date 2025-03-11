import { IClient, IClientStateContext } from "./context";
import { createAction } from "redux-actions"

export enum ClientActionEnums {
    getClientsPending = "GET_ClientS_PENDING",
    getClientsSuccess = "GET_ClientS_SUCCESS",
    getClientsError = "GET_ClientS_ERROR",

    getClientsMealplansPending = "GET_Clients_MEALPLANS_PENDING",
    getClientsMealplansSuccess = "GET_Clients_MEALPLANS_SUCCESS",
    getClientsMealplansError = "GET_Clients_MEALPLANS_ERROR",

    createClientPending = "CREATE_Client_PENDING",
    createClientSuccess = "CREATE_Client_SUCCESS",
    createClientError = "CREATE_Client_ERROR",

    registrationClientPending = "REGISTRATION_Client_PENDING",
    registrationClientSuccess = "REGISTRATION_Client_SUCCESS",
    registrationClientError = "REGISTRATION_Client_ERROR",

    loginClientPending = "LOGIN_Client_PENDING",
    loginClientSuccess = "LOGIN_Client_SUCCESS",
    loginClientError = "LOGIN_Client_ERROR",
    
};

export const getClientsPending = createAction<IClientStateContext>(
    ClientActionEnums.getClientsPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getClientsSuccess = createAction<
    IClientStateContext,
    IClient[]>(
        ClientActionEnums.getClientsSuccess,
        (Clients: IClient[]) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            Clients
        })
    );

export const getClientsError = createAction<IClientStateContext>(
    ClientActionEnums.getClientsError,
    () => ({ 
        isPending: false, 
        isSuccess: false, 
        isError: true 
    })
);

export const getClientPending = createAction<IClientStateContext>(
    ClientActionEnums.getClientsPending,
    () => ({ 
        isPending: true, 
        isSuccess: false, 
        isError: false 
    })
);

export const getClientSuccess = createAction<
    IClientStateContext, IClient>(
        ClientActionEnums.getClientsSuccess,
        (Client: IClient) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            Client
        })
    )

export const getClientError = createAction<IClientStateContext>(
    ClientActionEnums.getClientsError,
    () => ({ isPending: false, isSuccess: false, isError: true })
)

export const createClientPending = createAction<IClientStateContext>(
    ClientActionEnums.createClientPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
)

export const createClientSuccess = createAction<
    IClientStateContext, IClient>(
        ClientActionEnums.createClientSuccess,
        (Client: IClient) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            Client
        })
    )

export const createClientError = createAction<
IClientStateContext>(
    ClientActionEnums.createClientError,
    () => ({ 
        isPending: false, 
        isSuccess: false, 
        isError: true })
)

export const registrationClientPending = createAction<IClientStateContext>(
    ClientActionEnums.createClientPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
)

export const registrationClientSuccess = createAction<
    IClientStateContext, IClient>(
        ClientActionEnums.createClientSuccess,
        (Client: IClient) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            Client
        })
    )

export const registrationClientError = createAction<
IClientStateContext>(
    ClientActionEnums.createClientError,
    () => ({ 
        isPending: false, 
        isSuccess: false, 
        isError: true })
)



export const loginClientPending = createAction<
IClientStateContext>(
    ClientActionEnums.createClientPending,
    () => ({ 
        isPending: true, 
        isSuccess: false, 
        isError: false })
)

export const loginClientSuccess = createAction<
    IClientStateContext, IClient>(
        ClientActionEnums.createClientSuccess,
        (Client: IClient) => ({
            isPending: false,
            isSuccess: true,
            isError: false,
            Client
        })
    )

export const loginClientError = createAction<
IClientStateContext>(
    ClientActionEnums.createClientError,
    () => ({ 
        isPending: false, 
        isSuccess: false, 
        isError: true })
)

