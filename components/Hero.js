// components/Hero.js
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Hero() {
  return (
    <section className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className="display-4">Hey, I&apos;m <strong>James Zhang</strong></h1>
            <p className="lead">
              I am a web developer with experience in Python, JavaScript, SQL, and full-stack web development.
            </p>
            <div className="mt-4">
              <Button variant="primary" className="me-2">See Projects</Button>
              <Button variant="outline-secondary">📄 Resume</Button>
            </div>
          </Col>
          <Col md={5}>
            <Image
              src={`${basePath}/me.jpg`}
              alt="James Zhang"
              width={400}
              height={400}
              style={{ maxWidth: "100%", height: "auto" }}
              className="mx-auto d-block rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
