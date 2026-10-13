"use client";

import { useEffect, useState } from "react";

const slides = ["/images/hero.jpg", "/images/about.jpg", "/images/class.jpg"];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-slides" aria-hidden="true">
      {slides.map((src, i) => (
        <img key={src} src={src} alt="" className={i === index ? "on" : undefined} />
      ))}
    </div>
  );
}
