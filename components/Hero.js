// components/Hero.js
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';

const resumePath = './James_Zhang_Resume_Backend_2025.pdf';

// 轮播：只用短词，避免换行抖动
function RotatingTitle({
  words = [
    { text: 'James Zhang', bold: true },
    { text: 'a Developer', bold: true },
  ],
  typeSpeed = 40,
  backSpeed = 40,
  hold = 10000,
}) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);
  const timer = useRef();

  useEffect(() => {
    const w = words[idx % words.length].text;

    const tick = () => {
      if (del) {
        setText((t) => t.slice(0, -1));
        if (text.length === 0) {
          setDel(false);
          setIdx((i) => (i + 1) % words.length);
        }
        timer.current = setTimeout(tick, backSpeed);
      } else {
        const next = w.slice(0, text.length + 1);
        setText(next);
        if (next === w) {
          timer.current = setTimeout(() => setDel(true), hold);
        } else {
          timer.current = setTimeout(tick, typeSpeed);
        }
      }
    };

    timer.current = setTimeout(tick, del ? backSpeed : typeSpeed);
    return () => clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, del, idx, words, typeSpeed, backSpeed, hold]);

  const current = words[idx % words.length];
  return current.bold ? <strong>{text}</strong> : <span>{text}</span>;
}

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-5 bg-body" id="about">
      <Container>
        {/* 统一最大宽度，与 Skills 等一致 */}
        <div className="container-narrow">
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="fs-3 fs-md-2 fs-lg-1 text-body-emphasis">
                Hey, I am <RotatingTitle />
              </h1>

              {/* 固定副标题：数据库核心定位，不随轮播变化 */}
              <h2 className="h4 text-primary mb-3">
                Database-Focused Full-Stack Developer
              </h2>

              <p className="text-body-emphasis">
                I design and maintain <strong>relational databases</strong> (PostgreSQL, MySQL) and build
                <strong> data-driven applications</strong> where every feature starts with the schema.
                Focus areas: <strong>ER diagrams / data modeling</strong>, <strong>schema design &amp; normalization</strong>,
                <strong> query optimization</strong>, and <strong>database maintenance</strong> (backups, indexing, integrity).
                With 20+ years of hands-on database experience, I ensure reliability, consistency, and performance.
              </p>

              <div className="mt-4 d-flex gap-2">
                <Button as={Link} href="#projects" onClick={scrollToProjects} variant="primary">
                  See Projects
                </Button>

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
                src="./me.jpg"        // 保持你的原路径
                alt="James Zhang"
                width={400}
                height={400}
                className="mx-auto d-block rounded shadow"
                style={{ maxWidth: '100%', height: 'auto' }}
                priority
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
