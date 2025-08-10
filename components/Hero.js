// components/Hero.js
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';

// ✅ 不再拼 basePath，直接指向 public/ 下的文件（保持你原来的相对路径写法也行）
const resumePath = './James_Zhang_Resume_Backend_2025.pdf';

// 只负责在 “I am” 后轮换文字（两项）：James Zhang / a Web Developer
function RotatingTitle({
  words = [
    { text: 'James Zhang', bold: true },
    { text: 'a Web Developer', bold: true },
  ],
  typeSpeed = 40,
  backSpeed = 40,
  hold = 6000,
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
    <section className="py-5 bg-body">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className="display-4 text-body-emphasis">
              Hey, I am <RotatingTitle />
            </h1>

            <p className="text-body-emphasis">
              I am a full-stack software engineer specializing in Python, JavaScript, SQL, and frameworks like Flask, Django, and React. I design and deploy scalable backend systems, build RESTful APIs, and integrate responsive frontends to create seamless user experiences.

              My work includes developing a repair and maintenance tracking system for homeowners and landlords, a full-featured e-commerce platform with shopping cart and order processing, and a library management system optimized for performance.

              With a background in accounting and e-commerce, I bring technical depth and business insight, helping transform complex challenges into effective, user-friendly solutions. I am eager to contribute to impactful projects that improve efficiency and deliver measurable results.
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
              src="./me.jpg"   // 保持你的原路径
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
