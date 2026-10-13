"use client";

import { useState } from "react";
import { academy } from "@/data/content";

const slides = [
  {
    quote: "Google reviews from parents will appear in this slider once they are published on the academy’s listing.",
    name: "Vision Academy",
    role: "Jalgaon · Ring Road",
  },
  {
    quote: "We provide quality education for a better future of students and satisfaction of parents.",
    name: "Anil Mala’s Vision Academy",
    role: "The academy’s own words",
  },
  {
    quote: "Full guidance, support, and personal attention. Counselling is with Anil Mala Sir before a student joins a batch.",
    name: "Admissions",
    role: "How counselling works",
  },
];

export default function GoogleReviews() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <section className="section reviews" id="reviews">
      <div className="wrap center">
        <p className="kicker">GOOGLE REVIEWS</p>
        <h2>What Families Say</h2>
        <p className="sub">A home for the academy’s Google reviews. Names and scores are added only when a family has published them.</p>
        <article className="review-card">
          <button className="review-nav prev" type="button" aria-label="Previous review" onClick={() => setIndex((i) => (i + slides.length - 1) % slides.length)}>‹</button>
          <button className="review-nav next" type="button" aria-label="Next review" onClick={() => setIndex((i) => (i + 1) % slides.length)}>›</button>
          <div className="quote-mark" aria-hidden="true">”</div>
          <div className="review-slide" key={index}>
            <div className="avatar" aria-hidden="true">G</div>
            <p className="stars">Google</p>
            <blockquote>“{slide.quote}”</blockquote>
            <p className="who">{slide.name}</p>
            <p className="role">{slide.role}</p>
            <a className="g-link" href={academy.maps} target="_blank" rel="noreferrer">Open the academy on Google</a>
          </div>
        </article>
        <div className="dots">
          {slides.map((item, i) => (
            <button key={item.name} type="button" className={i === index ? "on" : undefined} aria-label={`Review ${i + 1}`} onClick={() => setIndex(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
