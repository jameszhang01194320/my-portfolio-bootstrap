// app/page.js
"use client";

import React from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <>
      {/* 这里原本有 <CustomNavbar />，已删除 */}

      <section id="hero">
        <Hero />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}
