"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { academy } from "@/data/content";

export default function WhatsAppButton() {
  const [lift, setLift] = useState(false);
  const href = `https://wa.me/${academy.whatsapp}?text=${encodeURIComponent("Hello Vision Academy, I would like to enquire about admission.")}`;

  useEffect(() => {
    const sync = () => setLift(localStorage.getItem("va-cookie") !== "accepted");
    sync();
    window.addEventListener("va-cookie", sync);
    return () => window.removeEventListener("va-cookie", sync);
  }, []);

  return (
    <div className={lift ? "float-actions lift" : "float-actions"}>
      <Link className="chat-fab" href="/contact" aria-label="Send an enquiry">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d="M6.2 16.4 4 19.2V7.4A2.4 2.4 0 0 1 6.4 5h11.2A2.4 2.4 0 0 1 20 7.4v6.6a2.4 2.4 0 0 1-2.4 2.4H6.2z" strokeLinejoin="round" />
        </svg>
      </Link>
      <a className="whatsapp" href={href} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <img src="/images/whatsapp.svg" alt="" />
      </a>
    </div>
  );
}
