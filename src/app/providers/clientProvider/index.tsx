"use client";
import React, { useReducer, useContext } from "react";
import {
  ClientStateContext,
  ClientActionContext,
  INITIAL_STATE,
  IClient,
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
  getClientsError,
} from "./action";
import { UseUsers } from "../currentuserProvider/index";
import axios from "axios";
import { ILoginResponse } from "../trainerProvider/context";
import { ICurrentUser } from "../currentuserProvider/context";

const useClientState = () => {
  const context = useContext(ClientStateContext);
  if (!context) {
    throw Error("Please ensure you have used the ClientStateContext Provider");
  }
  return context;
};

const useClientActionState = () => {
  const context = useContext(ClientActionContext);
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
  const { currentuser } = UseUsers();
  const [state, dispatch] = useReducer(ClientReducer, INITIAL_STATE);


  const createClient = async (clientdata: IClient) => {
    const token = sessionStorage.getItem("jwtToken");
    //const token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Y2FhMWM3ZjQ4MzY0MDAxOTVkYTE2OCIsIm5hbWUiOiJ0ZXN0IHRyYWluZXIgMiIsInJvbGUiOiJhZG1pbiIsImZlYXR1cmVzIjpbXSwiaWF0IjoxNzQxNzY0NTA0LCJleHAiOjE3NDIzNjkzMDR9.FBR5xQqA-xpUnLHRRERUaOO9iQ_xF5nFk4zw9P0WpPM"
    dispatch(createClientPending());
    console.log("this is the token createClient:", token);
    if (!token) {
      console.error("Your user doesnt have exsting token @ createclient");
      return;
    }
    const endpoint =
      "https://body-vault-server-b9ede5286d4c.herokuapp.com/api/client";
    const authHeader = token.startsWith("Bearer") ? token : `Bearer ${token}`;
    console.log("token from create client:", authHeader);
    try {
      console.log("Sending Client data", clientdata);
      const response = await axios.post(endpoint, clientdata, {
        headers: {
          Authorization: authHeader,
        },
      });
      dispatch(createClientSuccess(response.status));
      console.log(
        "Response this is the success of creating your client",
        response.status
      );
      console.log("created the client towards the end:", response.status);
      //route you to login page
    } catch (error) {
      console.error(
        "Error during creating the client:",
        error.response?.message || error
      );
      dispatch(createClientError());
    }
  };
  const registerationClient = async (clientdata: IClient) => {
    dispatch(registrationClientPending());
    const endpoint =
      "https://body-vault-server-b9ede5286d4c.herokuapp.com/api/users/register/mobile";
    try {
      console.log("Registering the client with:", clientdata);
      const response = await axios.post(endpoint,clientdata);
      console.log("Login response:", response.data);
      dispatch(registrationClientSuccess(response.data));
    } catch (error) {
      console.error(
        "Error during registering your user:",
        error.response?.data?.message || error
      );
      dispatch(registrationClientError());
    }
  };
  const loginClient = async (clientdata: IClient) => {
    dispatch(loginClientPending());
    const endpoint =
      "https://body-vault-server-b9ede5286d4c.herokuapp.com/api/users/login";
    try {
      console.log("Logging in user with:",clientdata);
      const response = await axios.post<ILoginResponse>(endpoint, clientdata);
      console.log("Login response:", response);
      //destucture at some point please
      const token = response.data.data.token;
      if (token) {
        console.log("this where we set the session");
        sessionStorage.setItem("jwtToken", token);
      } else {
        console.error("No token received in response");
      }
      dispatch(loginClientSuccess(response.data));
    } catch (error) {
      console.error(
        "Error during login:",
        error.response?.data?.message || error
      );
      dispatch(loginClientError());
    }
  };

  const getClients = async (trainerId2?:string) => {
    console.log("loging the trainerId2:",trainerId2)
    const token = sessionStorage.getItem("jwtToken");
    console.log("this is the token getClients:", token, "type something",currentuser); 
    console.log("current user data",currentuser);
    dispatch(getClientsPending());
    console.log("this is the token getClients:", token);
    if (!token) {
      console.error("Your user doesnt have exsting token getClients");
      return;
    }
    const endpoint = `https://body-vault-server-b9ede5286d4c.herokuapp.com/api/client/trainer/${trainerId2}/clients`;
    const authHeader = token.startsWith("Bearer") ? token : `Bearer ${token}`;
    console.log("token from create client:", authHeader);
    try {
      console.log("Getting the clients data Client data");
      const response = await axios.get<ICurrentUser>(endpoint, {
        headers: {
          Authorization: authHeader,
        },
      });
      console.log("Showing clients data:",response);
      console.log("Geting the clients before the success is", response.data);
      dispatch(getClientsSuccess(response.data.data));
      console.log("Geting the clients was a success", response.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
      dispatch(getClientsError());
    }
  };
  return (
    <ClientStateContext.Provider value={{...state}}>
      <ClientActionContext.Provider
        value={{ getClients, createClient, loginClient, registerationClient }}
      >
        {children}
      </ClientActionContext.Provider>
    </ClientStateContext.Provider>
  );
};
export default ClientProvider;
