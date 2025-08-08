// components/Experience.js
import React from "react";
import styles from "./Experience.module.css";

const experiences = [
  {
    year: "Present",
    title: "Software Developer & Sr. Technical Instructor",
    company: "Hashmap Labs/App Academy",
    description: `Company has shifted away from Ruby on Rails and more toward Python/Flask at this point.
    Consistently ranked as a top performer. Continued to teach, build internal tooling, and develop curriculum. 
    Played critical role in implementing MERN stack curriculum. Used JSForce to automate many work flows, 
    allowing instructors to take on double their original caseloads.`,
  },
  {
    year: "2018",
    title: "Software Developer & Technical Instructor",
    company: "Hashmap Labs/App Academy",
    description: `After attending App Academy as a student. I received an offer to teach at a competitor in the Bay Area. 
    Instead I took that offer and leveraged it for a role with a/A. Created tests, lectures, apps, and instructional 
    videos to teach students Javascript, PostgreSQL, React, Redux, and Ruby on Rails.`,
  },
  {
    year: "2017",
    title: "Freelance Developer",
    company: "Taylor Agency",
    description: `Did some contracting work building websites. Attended a bootcamp to learn pro development. 
    Mostly working in JS, HTML, & CSS.`,
  },
  {
    year: "2014",
    title: "CSR/Bookkeeper",
    company: "S&G Global Holdings",
    description: `The beginning of my career. Automated over 100 hours of data entry per week using Python.`,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-5 bg-body">
      <div className="container">
        <h2 className="fw-bold mb-5">Experiences</h2>
        <div className={styles.timeline}>
          {experiences.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineBadge}>{item.year}</div>
              <div className={styles.timelineContent}>
                <h5 className="fw-bold mb-1">{item.title}</h5>
                {/* ✅ 改成 text-body-secondary，自适应主题 */}
                <p className="text-body-secondary fw-semibold">{item.company}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
