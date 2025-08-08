// components/Navbar.jsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  // 调试：如果你仍然看到两条日志，说明还有别处在调用这个组件
  useEffect(() => { console.log("Navbar mounted"); }, []);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";
  return (
    <nav id="main-navbar" className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" href="./">James</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item"><Link className="nav-link" href="#about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#experiences">Resume</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#contact">Contact</Link></li>
            <li className="nav-item ms-lg-3">
              <button
                type="button"
                className="btn btn-link text-decoration-none px-0"
                onClick={() => setTheme(isDark ? "light" : "dark")}
              >
                <span className="d-inline-flex align-items-center gap-2">
                  <span>{isDark ? "🌙" : "🌞"}</span>
                  <span className="fw-semibold">Color mode</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
