import React from "react";
import { Container, Accordion } from "react-bootstrap";

function Project() {
  const projects = [
    {
      title: "BKK System",
      description:
        "The Special Job Exchange System (BKK) application is a digital platform designed to manage the job search process and provide job vacancy information for students, alumni and companies. This application is usually used by vocational schools or training institutions to facilitate interaction between job seekers (students) /alumni) and employers (companies).",
    },
    {
      title: "MyBike",
      description:
        "The MyBike application is a digital platform designed to facilitate various bicycle-related needs, such as bicycle purchasing, maintenance, community, rental, or even bicycle route guidance. This application can be used by bicycle enthusiasts, communities, or anyone who has special bicycle-related needs .",
    },
    {
      title: "Tepa RPL",
      description:
        "TEPA RPL is an abbreviation for Software Engineering Application Development Elaboration Stages. This term refers to the systematic steps taken in designing, developing, and implementing software applications or systems. This concept is very relevant in Software Engineering (RPL) education, especially at the vocational school level, to provide guidance in managing software projects.",
    },
  ];

  return (
    <Container className="mt-4 text-center">
      <h1>My Projects</h1>
      <p>Here is a list of our recent projects:</p>
      <Accordion>
        {projects.map((project, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{project.title}</Accordion.Header>
            <Accordion.Body>{project.description}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}

export default Project;
