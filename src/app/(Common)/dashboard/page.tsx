"use client";
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
    let isMounted = true;
    const fetchData=async () =>{
      try{
        if(isMounted){
          await getCurrentUser()
        } 
      }catch(error){
        if(isMounted){
          console.log(error)
        }
      }
    } 
    fetchData()
      return()=>{
        isMounted = false;
      }
  }, [token,getCurrentUser]);
 
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