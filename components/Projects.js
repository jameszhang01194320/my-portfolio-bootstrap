// components/Projects.js
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const projects = [
  {
    title: 'Repair_or_replace-back_end',
    description: 'Backend system enabling homeowners and landlords to track appliance ownership and maintenance costs.',
    stack: 'Python, Flask, SQLAlchemy, PostgreSQL, RESTful API',
    image: `${basePath}/repair.jpg`,
    github: '#'
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform with user registration/login, shopping cart, and order processing.',
    stack: 'Flask, React, SQL, AWS',
    image: `${basePath}/ecommerce.jpg`,
    github: '#'
  },
  {
    title: 'Library Management System',
    description: 'Library system supporting registration, book borrowing, and inventory updates.',
    stack: 'Python, SQL',
    image: `${basePath}/library.jpg`,
    github: '#'
  }
];

export default function Projects() {
  return (
    <section className="bg-white py-5">
      <Container>
        <h2 className="text-center mb-5">📁 My Projects</h2>
        <Row>
          {projects.map((project, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <Card className="h-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  priority
                  className="card-img-top"
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <small className="text-muted">{project.stack}</small>
                </Card.Body>
                <Card.Footer>
                  <Button href={project.github} target="_blank" variant="dark">
                    🔗 Github
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
