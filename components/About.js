// components/About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="mb-4">About Me</h2>
            <p>
I am a full-stack software engineer specializing in Python, JavaScript, SQL, and frameworks like Flask, Django, and React. I design and deploy scalable backend systems, build RESTful APIs, and integrate responsive frontends to create seamless user experiences.

My work includes developing a repair and maintenance tracking system for homeowners and landlords, a full-featured e-commerce platform with shopping cart and order processing, and a library management system optimized for performance. These projects strengthened my expertise in database design (PostgreSQL, MySQL), cloud deployment (AWS, Docker), and team collaboration using Agile methods.

With a background in accounting and e-commerce, I bring technical depth and business insight, helping transform complex challenges into effective, user-friendly solutions. I am eager to contribute to impactful projects that improve efficiency and deliver measurable results.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
