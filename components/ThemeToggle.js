// components/ThemeToggle.js
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const next = theme === "dark" ? "light" : "dark";

  return (
    <Button
      size="sm"
      variant={theme === "dark" ? "light" : "dark"}
      onClick={() => setTheme(next)}
      title={`Switch to ${next} mode`}
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </Button>
  );
}
