"use client";
import React, { useReducer, useContext } from "react";
import { ICurrentUser, INITIAL_STATE } from "./context";
import { CurrentUserActionContext, CurrentUserStateContext } from "./context";
import { CurrentUserReducer } from "./reducer";
import { 
  getCurrentUserPending,
  getCurrentUserError,
  getCurrentUserSuccess} 
  from "./action";
import axios from "axios";

const useCurrentState = () => {
  const context = useContext(CurrentUserStateContext);
  if (!context) {
    throw Error("Please ensure you have used the CurrentUserStateContext Provider");
  }
  return context;
};

const useCurrentActionState = () => {
  const context = useContext(CurrentUserActionContext);
  if (!context) {
    throw Error("Please ensure you have used the CurrentUserActionContext Provider");
  }
  return context;
};

const UseUsers = () => {
  return {
    ...useCurrentState(),
    ...useCurrentActionState(),
  };
};

export { UseUsers};

const CurrentProvider = ({ children }: { children: React.ReactNode }) => {
const [state, dispatch] = useReducer(CurrentUserReducer, INITIAL_STATE);


  const getCurrentUser = async () => {
    const token = sessionStorage.getItem("jwtToken");
    dispatch(getCurrentUserPending());
    console.log(token,"iS THE VALUE FROM SESSION STORAGE")
    if (!token) {
      console.error("There is no token found, User is not authenticated");
      return null;
    }
    const endpoint = "https://body-vault-server-b9ede5286d4c.herokuapp.com/api/user/current";
    const authHeader = token.startsWith("Bearer") ? token : `Bearer ${token}`;
    console.log(authHeader)
    try {
      const response = await axios.get<ICurrentUser>(endpoint, {
        headers: {
          Authorization: authHeader,
        },
      });
      dispatch(getCurrentUserSuccess(response.data))
      console.log("Current User Data:", response.data.data);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching the current user:", error.response?.data?.message || error);
      dispatch(getCurrentUserError());
      return null;
    }
  };

  return (
    <CurrentUserStateContext.Provider value={state}>
      <CurrentUserActionContext.Provider value={{ getCurrentUser }}>
        {children}
      </CurrentUserActionContext.Provider>
    </CurrentUserStateContext.Provider>
  );
};

export default CurrentProvider;




