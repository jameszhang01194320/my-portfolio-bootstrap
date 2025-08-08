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
    github: 'https://github.com/jameszhang01194320/repair_or_replace_back_end'
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform with user registration/login, shopping cart, and order processing.',
    stack: 'Flask, React, SQL, AWS',
    image: `${basePath}/ecommerce.jpg`,
    github: 'https://github.com/jameszhang01194320/week12_mini_E-commerceWebApp'
  },
  {
    title: 'Library Management System',
    description: 'Library system supporting registration, book borrowing, and inventory updates.',
    stack: 'Python, SQL',
    image: `${basePath}/library.jpg`,
    github: 'https://github.com/jameszhang01194320/LibraryManagementSystem'
  }
];

export default function Projects() {
  return (
    // ✅ 用 bg-body 跟随 data-bs-theme
    <section className="py-5 bg-body" id="projects">
      <Container>
        <h2 className="text-center mb-5">📁 My Projects</h2>
        <Row>
          {projects.map((project, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              {/* ✅ 卡片也使用 bg-body / border，随主题切换 */}
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
                  <Card.Text>{project.description}</Card.Text>
                  {/* ✅ 文本用 text-body-secondary，自动适配 */}
                  <small className="text-body-secondary">{project.stack}</small>
                </Card.Body>

                
                <Card.Footer className="bg-body border-0">
                  {/* ✅ 将 href 和 target 属性直接传递给 Button */}
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
      </Container>
    </section>
  );
}
