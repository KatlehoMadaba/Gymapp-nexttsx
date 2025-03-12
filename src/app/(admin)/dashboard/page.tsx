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

      getCurrentUser().then((user: ICurrentUser) => {

        getClients(user?.id);

      });

    }

  }, [token]);

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

  const handleCardClick = (id: string) => {

    router.push(`/client/${id}`);

  };

  const userNameInitials = currentuser.data.name

    .split(" ")

    .map((word: string) => word[0])

    .join("")

    .toUpperCase();

  // Function to generate random background color for the avatar

  const generateRandomColor = () => {

    const colors = ["#87d068", "#2db7f5", "#f56a00", "#ff4d4f", "#52c41a"];

    return colors[Math.floor(Math.random() * colors.length)];

  };

  return (
<div style={{ padding: "2rem" }}>
<h1>Welcome, {currentuser.data.name}</h1>
<Row gutter={[16, 16]}>
<Col xs={24} sm={12} lg={8}>
<Card>

            {/* Current User Information */}
</Card>
<Card

            title="Client Information"

            bordered={false}

            onClick={() => handleCardClick(currentuser.data.id)}

            style={{ cursor: "pointer" }}
>
<Row justify="center" style={{ marginBottom: "16px" }}>
<Avatar

                style={{

                  backgroundColor: "#87d068",

                  verticalAlign: "middle",

                  border: "2px solid #000", // Border around the avatar

                }}

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
</Row>
<Row gutter={[16, 16]}>

        {Array.isArray(Clients) && Clients.length > 0 ? (

          Clients.map((client, index) => (
<Col xs={24} sm={12} lg={8} key={client.id}>
<Card

                title={`Client ${index + 1}: ${client.fullName}`}

                bordered={false}

                onClick={() => handleCardClick(client.id)}

                style={{ cursor: "pointer" }}
>
<Row justify="center" style={{ marginBottom: "16px" }}>
<Avatar

                    style={{

                      backgroundColor: generateRandomColor(), // Random color for each avatar

                      verticalAlign: "middle",

                      border: "2px solid #000", // Border around the avatar

                    }}

                    size={64}
>

                    {client.fullName

                      .split(" ")

                      .map((word: string) => word[0])

                      .join("")

                      .toUpperCase()} {/* Display uppercase initials */}
</Avatar>
</Row>
<p>
<strong>Name:</strong> {client.fullName}
</p>
<p>
<strong>Email:</strong> {client.email}
</p>
</Card>
</Col>

          ))

        ) : (
<Col xs={24}>
<Card bordered={false} style={{ textAlign: "center" }}>

              No clients available
</Card>
</Col>

        )}
</Row>
</div>

  );

};

export default Dashboard; 