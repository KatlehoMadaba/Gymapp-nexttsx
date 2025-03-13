"use client";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Spin, Avatar } from "antd";
import { useRouter } from "next/navigation";
import { UseUsers } from "../../providers/currentuserProvider/index";


const Dashboard = () => {
    const { getCurrentUser, currentuser, isError, isPending } = UseUsers();
    const [token, setToken] = useState(null);
    const router = useRouter();
    useEffect(() => {
        setToken(sessionStorage.getItem("jwtToken"));
    }, []);
    useEffect(() => {
        if (token) {
            getCurrentUser();
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
        </div>
    );
};

export default Dashboard; 