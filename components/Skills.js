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
    { name: 'Git', icon: '🔗' },
    { name: 'HTML5 & CSS3', icon: '🎨' },
    { name: 'AWS / Cloud', icon: '☁️' },
    { name: 'Bookkeeping', icon: '📒' },   // ✅ 新增，放在最后
    { name: 'QuickBooks', icon: '📘' }     // ✅ 与 Bookkeeping 一起
  ];

  return (
    <section className="container my-5" id="skills">
      <h2 className="text-center mb-4">💼 Skills</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <div className="border rounded p-3 text-center shadow-sm h-100">
              <div style={{ fontSize: '2rem' }}>{skill.icon}</div>
              <div className="mt-2">{skill.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
