// components/Projects.js
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const projects = [
  {
    title: 'Repair_or_replace-back_end',
    description:
      'Backend system for homeowners/landlords to track appliances, repairs, and investments. Built on a relational schema (PostgreSQL) with ER modeling and integrity constraints.',
    stack: 'Python, Flask, SQLAlchemy, PostgreSQL, RESTful API',
    dbHighlights:
      'ER diagram · normalized tables · FK/constraints · indexed reporting queries',
    image: `${basePath}/repair.jpg`,
    github: 'https://github.com/jameszhang01194320/repair_or_replace-back_end',
  },
  {
    title: 'E-commerce Platform',
    description:
      'Full-featured shop (auth, cart, checkout, order history) driven entirely by a MySQL relational database and schema-first design.',
    stack: 'Flask, React, MySQL/SQL, AWS',
    dbHighlights:
      'Users/Products/Orders/Payments schema · transactions · analytics queries',
    image: `${basePath}/ecommerce.jpg`,
    github: 'https://github.com/jameszhang01194320/week12_mini_E-commerceWebApp',
  },
  {
    title: 'Library Management System',
    description:
      'Registration, borrowing/returns, and inventory are powered by a SQL relational model with clear entity relationships.',
    stack: 'Python, SQL (Relational)',
    dbHighlights:
      'Members/Books/BorrowRecords schema · ER model · backups & integrity checks',
    image: `${basePath}/library.jpg`,
    github: 'https://github.com/jameszhang01194320/LibraryManagementSystem',
  },
];

export default function Projects() {
  return (
    <section className="py-5 bg-body" id="projects">
      <Container>
        <div className="container-narrow">
          <h2 className="text-center mb-5">📁 My Projects</h2>
          <Row>
            {projects.map((project, idx) => (
              <Col key={idx} className="mb-4 col-12 col-sm-6 col-lg-4">
                <Card className="h-100 bg-body border">
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
                    <Card.Text className="mb-2">{project.description}</Card.Text>
                    <small className="text-body-secondary d-block">
                      <strong>Stack:</strong> {project.stack}
                    </small>
                    <small className="text-body-secondary d-block mt-1">
                      <strong>DB Highlights:</strong> {project.dbHighlights}
                    </small>
                  </Card.Body>

                  <Card.Footer className="bg-body border-0">
                    <Button
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-secondary"
                    >
                      <span className="d-inline-flex align-items-center gap-2">
                        <span>🔗</span> Github
                      </span>
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
