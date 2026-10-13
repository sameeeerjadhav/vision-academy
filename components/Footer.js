import Link from "next/link";
import { academy, nav } from "@/data/content";

export default function Footer() {
  return (
    <>
      <section className="cta">
        <div className="wrap">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join Anil Mala&apos;s Vision Academy and take the first step with a counselling session.</p>
          <Link href="/admissions" className="btn btn-yellow">Enroll Now →</Link>
        </div>
      </section>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <div className="foot-brand">
              <svg width="36" height="36" viewBox="0 0 48 48" aria-hidden="true">
                <circle cx="24" cy="24" r="22" fill="#08364d" />
                <path d="M24 10l9 3.4V22c0 6.2-3.6 10.6-9 12.2C18.6 32.6 15 28.2 15 22V13.4L24 10z" fill="none" stroke="#f5b400" strokeWidth="1.8" />
              </svg>
              VISION ACADEMY
            </div>
            <p>Quality education for a better future of students, and satisfaction for parents. Full guidance, support, and personal attention.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              {nav.map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Our Courses</h3>
            <ul>
              <li><Link href="/courses">State Board (5th–10th)</Link></li>
              <li><Link href="/courses">CBSE (5th–10th)</Link></li>
              <li><Link href="/courses">11th &amp; 12th Science</Link></li>
              <li><Link href="/courses">JEE, NEET &amp; MHT-CET</Link></li>
              <li><Link href="/notices">Notices</Link></li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>
              {academy.address.map((line) => (
                <span key={line}>{line}<br /></span>
              ))}
            </p>
            <p style={{ marginTop: "0.7rem" }}>
              <Link href="/contact">Send an enquiry</Link>
            </p>
          </div>
        </div>
        <div className="wrap legal">
          <span>© {new Date().getFullYear()} Anil Mala&apos;s Vision Academy, Jalgaon.</span>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>
      </footer>
    </>
  );
}
