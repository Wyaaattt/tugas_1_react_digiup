import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./css/About.css";

function About() {
  return (
    <Container className="mt-4">
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <h1 className="display-4 mb-4 text-primary">About Me</h1>
          <p className="text-muted fst-italic">"Learn, Create and Grow"</p>
          <p className="lead text-justify">
            I am a 12th grade vocational school student at SMKN 11 Bandung who is currently undergoing Field Work Practice (PKL) at Sobat Teknologi. I am in semester 6, with a high enthusiasm for learning to develop skills and experience in
            the real world of work.
          </p>
          <p>
            I have a hobby of playing football, basketball and badminton, which not only provide fun but also train teamwork, strategy and physical endurance. Apart from that, I also have an interest in technology and always enthusiastic to
            learn new things in this field.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <Image src="/image/saya.jpg" alt="Profile" fluid rounded className="shadow-lg profile-img" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
