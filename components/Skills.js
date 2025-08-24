// components/Skills.js
'use client';
import React from 'react';

export default function Skills() {
  const skills = [
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'SQL / Database Design', icon: '📊' },
    { name: 'Python/Flask', icon: '🐍' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Git', icon: '🔗' },
    { name: 'HTML5 & CSS3', icon: '🎨' },
    { name: 'QuickBooks', icon: '📘' },
    { name: 'AWS / Cloud', icon: '☁️' },
  ];

  return (
    <section className="container my-5" id="skills">
      <div className="container-narrow">
        <h2 className="text-center mb-2">💼 Skills</h2>
        <p className="text-center text-secondary mb-4">
          Core focus: PostgreSQL · MySQL · SQL / Data Modeling
        </p>
        <div className="row">
          {skills.map((skill, i) => (
            <div className="col-12 col-sm-6 col-lg-3 mb-4" key={i}>
              <div className="border rounded p-3 text-center shadow-sm h-100">
                <div style={{ fontSize: '2rem' }}>{skill.icon}</div>
                <div className="mt-2">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
