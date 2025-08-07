// app/page.js
"use client";

import React from "react";
import CustomNavbar from "@/components/Navbar";
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
      <CustomNavbar />

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
