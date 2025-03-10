"use client";
import React, { useEffect } from "react";
import {UseUsers } from "../../providers/currentuserProvider/index";

const Dashboard = () => {

  const {getCurrentUser,currentuser}=UseUsers();

  useEffect(() => {
    getCurrentUser();
  }, []);
  
  // Check if user data has loaded (adjust property names as per your ICurrentUser interface)
  if (currentuser.data) {
    return <div>Loading user information...</div>;
  }

  return (
    <div>
      {/* <h1>Welcome, {currentuser.data.name}!</h1>
      <p>Your email is: {currentuser.data.email}</p>
      <p>Your user ID is: {currentuser.data.id}</p> */}
      <p>Hey there...:{currentuser.data.name}</p>
    </div>
  );
};

export default Dashboard;