import React from "react";
import { Container, Button } from "react-bootstrap";
import "./css/Home.css";

function Home() {
  return (
    <Container
      fluid
      className="hero-section d-flex align-items-center text-center text-white mt-3"
      style={{
        minHeight: "75vh",
        backgroundImage: `url('../image/tribun.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      ></div>

      {/* Hero Text */}
      <div
        className="hero-text mx-auto position-relative"
        style={{
          zIndex: 2,
          maxWidth: "600px",
          padding: "20px",
        }}
      >
        <h1 className="display-4 fw-bold mb-3">Gultom, Julius</h1>
        <p className="lead mb-4">Class 12 Students - SMKN 11 Bandung</p>
        <Button variant="primary" size="lg">
          Learn More
        </Button>
      </div>
    </Container>
  );
}

export default Home;
