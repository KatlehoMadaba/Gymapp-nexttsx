"use client";
import React, { useEffect } from "react";
import { UseUsers} from "../../providers/currentuserProvider/index";

const Dashboard = () => {
  // Get user data (state) and actions separately.
  
  const {getCurrentUser,currentuser}=UseUsers();

  useEffect(() => {
    getCurrentUser();
  }, []);
  debugger
  // Check if user data has loaded (adjust property names as per your ICurrentUser interface)
  if (!currentuser?.data.email) {
    return <div>Loading user information...</div>;
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