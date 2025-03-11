"use client"
import React,{ useReducer, useContext} from "react";
import {
  ClientStateContext,
  ClientActionContext,
  INITIAL_STATE,
  IClient,
  IClientLogin,
  ILoginResponse,
  IClientRegResponse,
} from "./context";
import { ClientReducer } from "./reducer";
import { 
  createClientPending,
  createClientError,
  createClientSuccess,
  loginClientPending,
  loginClientError,
  loginClientSuccess,
  registrationClientPending,
  registrationClientSuccess,
  registrationClientError,
  getClientsPending,
  getClientsSuccess,
  getClientsError
} from "./action";
import { UseUsers} from "../currentuserProvider/index";
import axios from "axios";



 const useClientState = () => {
  const context =useContext(ClientStateContext);
  if (!context) {
    throw Error("Please ensure you have used the ClientStateContext Provider");
  }
  return context;
};

 const useClientActionState = () => {
  const context = useContext(ClientActionContext);;
  if (!context) {
    throw Error("Please ensure you have used the ClientActionContext Provider");
  }
  return context;
};


const UseClients = () => {
  return {
    ...useClientState(),
    ...useClientActionState(),
  };
};

export { UseClients };

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
    const {currentuser} =UseUsers();
    const [state, dispatch] = useReducer(ClientReducer, INITIAL_STATE);

    const createClient = async (Client: IClient) => {
      const token=sessionStorage.getItem("jwtToken");
      dispatch(createClientPending());
      console.log("this is the token createCliet:",token)
      if(!token){
        console.error("Your user doesnt have exsting token @ createclient")
      return
      }
        const endpoint="https://body-vault-server-b9ede5286d4c.herokuapp.com/api/client";
        const authHeader=token.startsWith("Bearer") ? token : `Bearer ${token}`;
        console.log("token from create client:",authHeader)
        try {
            console.log('Sending Client data',Client);
            const response=await axios.post<IClient>(endpoint,{
              headers:{
                Authorization: authHeader,
              },
            });
            dispatch(createClientSuccess(response.status));
            console.log('Response',response.status);
            console.log("created the client towards the end:", response.status);
            //route you to login page
        } catch (error) {
            console.error("Error during creating the client:",error.response?.message ||error)
            dispatch(createClientError());   
        }
    };
    const registerationClient = async (Client: IClient) => {
      dispatch(registrationClientPending());
      const endpoint = "https://body-vault-server-b9ede5286d4c.herokuapp.com/register/mobile";
      try {
        console.log('Registering the client with:', Client);
        const response = await axios.post<IClientRegResponse>(endpoint, Client);
        console.log('Login response:', response.data);
        dispatch(registrationClientSuccess(response.data));
      } catch (error) {
        console.error("Error during registering your user:", error.response?.data?.message || error);
        dispatch(registrationClientError());
      }
    };
  const loginClient = async (Client: IClientLogin) => {
    dispatch(loginClientPending());
    const endpoint = "https://body-vault-server-b9ede5286d4c.herokuapp.com/api/users/login";
    try {
      console.log('Logging in user with:', Client);
      const response = await axios.post<ILoginResponse>(endpoint, Client);
      console.log('Login response:', response.data);
      //destucture at some point please 
      const token = response.data.data.token; 
      if (token) {
        console.log("this where we set the session")
        sessionStorage.setItem("jwtToken", token);
      } else {
        console.error("No token received in response");
      }
      dispatch(loginClientSuccess(response.data));
    } catch (error) {
      console.error("Error during login:", error.response?.data?.message || error);
      dispatch(loginClientError());
    }
  };
  const getClients = async () => {
    const token=sessionStorage.getItem("jwtToken");
    console.log("this is the token getClients:",token)
    // const trainerid=currentuser.data.id
    //console.log("This trainerid",trainerid);
    console.log("current user data",currentuser.data);
    dispatch(getClientsPending());
    console.log("this is the token getClients:",token)
    if(!token){
      console.error("Your user doesnt have exsting token getClients")
      return
    }
      //const endpoint = `https://body-vault-server-b9ede5286d4c.herokuapp.com/api/client/trainer/${trainerid}/clients`;
       const authHeader=token.startsWith("Bearer") ? token : `Bearer ${token}`;
       console.log("token from create client:",authHeader)
      const endpoint = "https://body-vault-server-b9ede5286d4c.herokuapp.com/api/client/trainer/67cf0c43e2436c0019ae85b7/clients"
      try {
          console.log('Getting the clients data Client data');
          const response=await axios.get(endpoint,{
            headers:{
              Authorization: authHeader,
            },
          });
          dispatch(getClientsSuccess(response.data));
          console.log("Geting the clients was a success",response.data)
      } catch (error) {
          console.error("Error fetching clients:", error);
          dispatch(getClientsError());
      }
};
    return (
          <ClientStateContext.Provider value={state}>
            <ClientActionContext.Provider
              value={{getClients,createClient,loginClient,registerationClient}}>
              {children}
            </ClientActionContext.Provider>
          </ClientStateContext.Provider>
      );

}
export default ClientProvider;


