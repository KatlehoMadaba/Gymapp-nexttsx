"use client";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Spin, Avatar } from "antd";
import { useRouter } from "next/navigation";
import { UseUsers } from "../../providers/currentuserProvider/index";
import { UseClients } from "@/app/providers/clientProvider";
import { ICurrentUser } from "@/app/providers/currentuserProvider/context";
const Dashboard = () => {
  const { getCurrentUser, currentuser, isError, isPending } = UseUsers();
  const { getClients, Clients } = UseClients();
  const [token, setToken] = useState(null);
  const router = useRouter();
  useEffect(() => {
    setToken(sessionStorage.getItem("jwtToken"));
  }, []);

  useEffect(() => {
    if (token) {
      console.log("This is the token in the useEffect dashboard", token);
      getCurrentUser().then((user: ICurrentUser) => {
        console.log(" effect",user);
        getClients(user?.id);
      });
    }
  }, [token]);

  // useEffect(()=>{
  //   getCurrentUser();
  // },[])

  if (isPending) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <Spin tip="Loading current user data..." />
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p>Sorry, something went wrong with loading your data</p>
      </div>
    );
  }

  if (!currentuser) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>No user found!</h2>
      </div>
    );
  }
  // if (!Clients || Clients.length === 0) {
  //   return <div>No clients found</div>;
  // } else {
  // }

  // Handle card click to navigate
  const handleCardClick = (id: string) => {
    router.push(`/client/${id}`);
  };

  // Get the first two letters of the user's name for the avatar
  const userNameInitials = currentuser.data.name
    .split(" ")
    .map((word: string) => word[0])
    .join("")
    .toUpperCase();
  console.log("These are the users", Clients);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome, {currentuser.data.name}</h1>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={8}>
          <Card
            title="Client Information"
            bordered={false}
            onClick={() => handleCardClick(currentuser.data.id)} // Make the card clickable
            style={{ cursor: "pointer" }}
          >
            <Row justify="center" style={{ marginBottom: "16px" }}>
              <Avatar
                style={{ backgroundColor: "#87d068", verticalAlign: "middle" }}
                size={64}
              >
                {userNameInitials}
              </Avatar>
            </Row>
            <p>
              <strong>Name:</strong> {currentuser.data.name}
            </p>
            <p>
              <strong>Email:</strong> {currentuser.data.email}
            </p>
            <p>
              <strong>Contact Number:</strong> {currentuser.data.contactNumber}
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card
            title="Additional Information"
            bordered={false}
            onClick={() => handleCardClick(currentuser.data.id)} // Make the card clickable
            style={{ cursor: "pointer" }}
          >
            <Row justify="center" style={{ marginBottom: "16px" }}>
              <Avatar
                style={{ backgroundColor: "#87d068", verticalAlign: "middle" }}
                size={64}
              >
                {userNameInitials}
              </Avatar>
            </Row>
            <p>
              <strong>Trainer ID:</strong> {currentuser.data.id}
            </p>
            <p>
              <strong>Date of Birth:</strong> {currentuser.data.dateOfBirth}
            </p>
            <p>
              <strong>Active State:</strong>{" "}
              {currentuser.data.activeState ? "Active" : "Inactive"}
            </p>
          </Card>
        </Col>
      </Row>

      {Array.isArray(Clients) && Clients.length > 0 ? (
        Clients.map((client, index) => (
          <tr
            key={client.id}
            className="border-b border-gray-200 hover:bg-gray-100"
          >
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{client.fullName}</td>
            <td className="py-3 px-6">{client.email}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td>Users unavaliable</td>
          {/* <td colSpan="4" className="py-3 px-6 text-center">No trainers available</td> */}
        </tr>
      )}
    </div>
  );
};

export default Dashboard;
