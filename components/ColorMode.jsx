// components/ColorMode.jsx
"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ColorMode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";
  const label = "Color mode";
  const icon = isDark ? "🌙" : "☀️";

  return (
    <button
      type="button"
      className="btn btn-link text-decoration-none px-0"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color mode"
    >
      <span className="d-inline-flex align-items-center gap-2">
        <span className="opacity-75">{icon}</span>
        <span className="fw-semibold">{label}</span>
      </span>
    </button>
  );
}
