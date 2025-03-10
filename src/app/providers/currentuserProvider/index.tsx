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

  const getCurrentUser = async (): Promise<ICurrentUser | null> => {
    dispatch(getCurrentUserPending());
    const endpoint = "https://body-vault-server-b9ede5286d4c.herokuapp.com/api/users/current";
    const token = sessionStorage.getItem("jwtToken");
    console.log(token,"iS THE VALUE FROM SESSION STORAGE")
    if (!token) {
      console.error("There is no token found, User is not authenticated");
      return null;
    }
    const authHeader = token.startsWith("Bearer") ? token : `Bearer ${token}`;
    console.log(authHeader)
    try {
      const response = await axios.get<ICurrentUser>(endpoint, {
        headers: {
          Authorization: authHeader,
        },
      });
      dispatch(getCurrentUserSuccess(response.data))
      console.log("Current User Data:", response.data);
      return response.data;
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


// import React, { useReducer, useContext } from "react";
// import { ICurrentUser, INITIAL_STATE } from './context';
// import { CurrentUserActionContext, CurrentUserStateContext } from "./context";
// import { CurrentUserReducer } from "./reducer";
// import { currentUserTokenEmpty, currentUserTokenPopulated } from './action';
// import axios from "axios";

// const useCurrentState = () => {
//   const context = useContext(CurrentUserStateContext);
//   if (!context) {
//     throw Error("Make sure you have used the CurrentUserStateContext Provider");
//   }
//   return context;
// };

// const useCurrentActionState = () => {
//   const context = useContext(CurrentUserActionContext);
//   if (!context) {
//     throw Error("Make sure you have used the CurrentUserActionContext Provider");
//   }
//   return context;
// };

// const UseUsers = () => {
//   return {
//     ...useCurrentState(),      // Call the hook to get state
//     ...useCurrentActionState() // Call the hook to get actions
//   }
// }

// export { UseUsers };

// const CurrentProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, dispatch] = useReducer(CurrentUserReducer, INITIAL_STATE);
  
//   const getCurrentUser = async (): Promise<ICurrentUser | null> => {
//     dispatch(currentUserTokenEmpty());
//     const endpoint = "https://body-vault-server-b9ede5286d4c.herokuapp.com/api/users/current";
//     const token = sessionStorage.getItem("jwtToken");
//     const authHeader = token?.startsWith("Bearer") ? token : Bearer ${token};
//     if (!token) {
//       console.error("There is no token found, User is not authenticated");
//       return null;
//     }
//     try {
//       const response = await axios.get<ICurrentUser>(endpoint, {
//         headers: {
//           Authorization: `Bearer ${token}`, 
//         },
//       });
//       // Dispatch with the received user data
//       dispatch(currentUserTokenPopulated(response.data));
//       console.log("Current User Data:", response.data);
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching the current user:", error.response?.data?.message || error);
//       return null;
//     }
//   };

//   return (
//     <CurrentUserStateContext.Provider value={state}>
//       <CurrentUserActionContext.Provider value={{ getCurrentUser }}>
//         {children}
//       </CurrentUserActionContext.Provider>
//     </CurrentUserStateContext.Provider>
//   )
// }

// export default CurrentProvider;