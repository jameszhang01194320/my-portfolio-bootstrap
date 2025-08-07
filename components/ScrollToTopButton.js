// components/ScrollToTopButton.js
"use client";

import React, { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动高度
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="btn btn-primary position-fixed"
      style={{
        bottom: "40px",
        right: "30px",
        zIndex: 1000,
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        fontSize: "20px",
      }}
    >
      ↑
    </button>
  );
}
