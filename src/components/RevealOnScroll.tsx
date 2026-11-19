"use client";
import { useEffect } from "react";
export default function RevealOnScroll() {
  useEffect(() => {
    document.documentElement.classList.add("rv");
    const els = document.querySelectorAll(".reveal, .reveal-zoom");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => { entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }); }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
