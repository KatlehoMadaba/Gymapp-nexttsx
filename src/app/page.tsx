"use client";

import React from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const ActiveGymLanding = () => {
  const router = useRouter();

  const handleTrainer = () => {
    router.push("/adminview");
  };

  const handleClient = () => {
    router.push("/clientview");
  };

  return (
    <div className={styles.landingPage} style={{
      backgroundImage: "url('/gym-background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#1E90FF" }}>Welcome to Active Gym</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
        Your ultimate fitness destination. Achieve your goals with our top-notch facilities and expert trainers.
      </p>
      <div style={{ marginTop: "20px" }}>
        <Button type="primary" onClick={handleTrainer} style={{ marginRight: "10px" }}>Trainer</Button>
        <Button type="default" onClick={handleClient}>Client</Button>
      </div>
    </div>
  );
};

export default ActiveGymLanding;