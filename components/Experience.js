// components/Experience.js
import React from "react";
import styles from "./Experience.module.css"; // 继续使用你的时间轴样式

const experiences = [
  {
    year: "Present",
    title: "Software Engineer Trainee",
    company: "Coding Temple · Remote",
    tech: ["Python", "Flask", "React", "SQL", "PostgreSQL", "Docker", "AWS"],
    points: [
      "Developed RESTful APIs with Flask & SQLAlchemy; improved backend response time by 25%.",
      "Designed PostgreSQL schemas for relational data; optimized queries for real-time reads.",
      "Integrated React frontend with Flask via Axios (auth, cart, checkout).",
      "Deployed full-stack apps to AWS with Docker; ensured scalability & reliability.",
      "Collaborated in an Agile team of 5 (daily standups, bi-weekly reviews); +30% task efficiency.",
    ],
  },
  {
    year: "2022",
    title: "Administrative Assistant",
    company: "John H Wu Medical Office",
    description: `Introduced a document management system, improving efficiency by 20%.
    Streamlined administrative workflows using tools like Excel and PowerPoint, ensuring smooth office operations.`,
  },
  {
    year: "2014",
    title: "E-Commerce Business Owner",
    company: "Self-Employed",
    description: `Built and managed an online platform for educational material sales, achieving $400,000+ in revenue.
Utilized tools like Shopify and Google Ads to optimize marketing campaigns and enhance customer engagement.
`,
  },
];

// 把 description 的每一行都当作一个 bullet；若行以“• ”开头会自动去掉这个符号
function linesToPoints(desc = "") {
  return desc
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((l) => l.replace(/^•\s*/, ""));
}

export default function Experience() {
  return (
    <section id="experience" className="py-5 bg-body">
      <div className="container">
        <h2 className="fw-bold mb-5">Experience</h2>

        <div className={styles.timeline}>
          {experiences.map((item, idx) => {
            // 把 tech 合并成一行，作为 bullets 的第一条；其余从 points 或 description 转换
            const techBullet =
              item.tech && item.tech.length ? item.tech.join(", ") : null;

            const basePoints =
              item.points && item.points.length > 0
                ? item.points
                : linesToPoints(item.description || "");

            const bullets = [techBullet, ...basePoints].filter(Boolean);

            return (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineBadge}>{item.year}</div>

                <div className={styles.timelineContent}>
                  <h5 className="fw-bold mb-1">{item.title}</h5>
                  <p className="text-body-secondary fw-semibold mb-2">
                    {item.company}
                  </p>

                  {/* 统一按列表渲染，包括“Python/Flask/…”那一行 */}
                  {bullets.length > 0 && (
                    <ul className="mt-2 mb-0 ps-3">
                      {bullets.map((p, i) => (
                        <li key={i} className="mb-1">
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
