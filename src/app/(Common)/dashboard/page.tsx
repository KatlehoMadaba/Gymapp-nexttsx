"use client";
// import React, { useEffect } from "react";
import React ,{useEffect}from "react";
import { UseUsers} from "../../providers/currentuserProvider/index";
import{UseTrainers } from "../../providers/trainerProvider/index"

const Dashboard = () => {

  const {getCurrentUser,currentuser,isError,isPending}=UseUsers();
  const {loginTrainer} =UseTrainers()
  let token=""
  if(loginTrainer){
    token=sessionStorage.getItem("jwtToken")
  }
  useEffect(() => {
    getCurrentUser()
    
  }, [token]);
 
  // debugger
  // Check if user data has loaded (adjust property names as per your ICurrentUser interface)
  // if (!currentuser?.data.email) {
  //   return <div>Loading user information...</div>;
  // }
 
  if(isPending){
    return<div>Loading current user data...</div>
  }
  if(isError){
    return <div>Sorry something went wrong with loading your data</div>
  }
  // Show empty state
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