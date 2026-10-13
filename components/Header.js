"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/data/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <svg className="brand-mark" viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="#08364d" />
            <path d="M24 10l9 3.4V22c0 6.2-3.6 10.6-9 12.2C18.6 32.6 15 28.2 15 22V13.4L24 10z" fill="none" stroke="#f5b400" strokeWidth="1.8" />
            <path d="M18.5 23.5 24 15l5.5 8.5" fill="none" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
          <span>
            <strong>VISION ACADEMY</strong>
            <small>ANIL MALA · JALGAON</small>
          </span>
        </Link>
        <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="site-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
        <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/admissions" className="btn btn-yellow nav-cta" onClick={() => setOpen(false)}>
            Enroll Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
