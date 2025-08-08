// components/Hero.js
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';

// ✅ 不再拼 basePath，直接指向 public/ 下的文件
const resumePath = './James_Zhang_Resume_Backend_2025.pdf';

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-5 bg-body">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className="display-4 text-body-emphasis">
              Hey, I&apos;m <strong>James Zhang</strong>
            </h1>
            <p className="lead text-body-secondary">
              I am a web developer with experience in Python, JavaScript, SQL, and full-stack web development.
            </p>
            <div className="mt-4 d-flex gap-2">
              {/* See Projects → 平滑滚动 */}
              <Button as={Link} href="#projects" onClick={scrollToProjects} variant="primary">
                See Projects
              </Button>

              {/* Resume → 从 public/ 下载 */}
              <Button
                as="a"
                href={resumePath}
                download
                target="_blank"
                rel="noopener"
                variant="outline-secondary"
              >
                📄 Resume
              </Button>
            </div>
          </Col>

          <Col md={5}>
            <Image
              src="/me.jpg"   // ✅ 同样直接用 public 下的路径
              alt="James Zhang"
              width={400}
              height={400}
              className="mx-auto d-block rounded shadow"
              style={{ maxWidth: '100%', height: 'auto' }}
              priority
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
