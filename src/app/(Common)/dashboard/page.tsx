"use client";
import React, { useEffect, useState } from "react";
import { UseUsers } from "../../providers/currentuserProvider/index";

const Dashboard = () => {
  const { getCurrentUser, currentuser, isError, isPending } = UseUsers();

  const [token,setToken] = useState(null);

  useEffect(() => {
    setToken(sessionStorage.getItem("jwtToken"));
  }, []);

  useEffect(()=>{
    if (token) {
      console.log("This is the token in the useeffect dashboard", token);
      getCurrentUser();
    }
  },[token])

  if (isPending) {
    return <div>Loading current user data...</div>;
  }
  if (isError) {
    return <div>Sorry something went wrong with loading your data</div>;
  }

  if (!currentuser) {
    return <div>No user found!</div>;
  }
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome, {currentuser.data.name}</h1>
      <p>Your email is: {currentuser.data.email}</p>
      <p>Your user ID is: {currentuser.data.id}</p>
    </div>
  );
};

export default Dashboard;
