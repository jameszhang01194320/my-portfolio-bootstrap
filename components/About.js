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
              I&apos;m a passionate software developer based in San Francisco with hands-on experience
              in building full-stack applications using Python, JavaScript, Flask, Django, and React.
              I love turning ideas into working products and continuously improving my skills.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
