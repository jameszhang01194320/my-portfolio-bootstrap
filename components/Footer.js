// components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-5 border-top">
      <Container>
        <p className="mb-0 text-muted">
          © {new Date().getFullYear()} James Zhang. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
