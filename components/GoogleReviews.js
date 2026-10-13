"use client";

import { useState } from "react";
import { academy } from "@/data/content";

const slides = [
  {
    quote: "Quality education for a better future of students, and satisfaction for parents.",
    name: "Vision Academy",
    role: "Jalgaon · Ring Road",
  },
  {
    quote: "Full guidance, support, and personal attention. Counselling is with Anil Mala Sir before a student joins.",
    name: "Anil Mala’s Vision Academy",
    role: "How families are welcomed",
  },
  {
    quote: "School, science, and entrance preparation sit together, so the batch matches the exam.",
    name: "Admissions",
    role: "State Board, CBSE, JEE, NEET, MHT-CET",
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
        <p className="sub">Words from the academy, until parent reviews from Google are ready to publish here.</p>
        <div className="review-stage">
          <button className="review-nav prev" type="button" aria-label="Previous review" onClick={() => setIndex((i) => (i + slides.length - 1) % slides.length)}>
            <span aria-hidden="true">‹</span>
          </button>
          <article className="review-card">
            <div className="quote-mark" aria-hidden="true">”</div>
            <div className="review-slide" key={index}>
              <div className="avatar" aria-hidden="true">G</div>
              <blockquote>“{slide.quote}”</blockquote>
              <p className="who">{slide.name}</p>
              <p className="role">{slide.role}</p>
            </div>
          </article>
          <button className="review-nav next" type="button" aria-label="Next review" onClick={() => setIndex((i) => (i + 1) % slides.length)}>
            <span aria-hidden="true">›</span>
          </button>
        </div>
        <div className="dots">
          {slides.map((item, i) => (
            <button key={item.role} type="button" className={i === index ? "on" : undefined} aria-label={`Review ${i + 1}`} onClick={() => setIndex(i)} />
          ))}
        </div>
        <a className="g-link" href={academy.maps} target="_blank" rel="noreferrer">Open on Google</a>
      </div>
    </section>
  );
}
