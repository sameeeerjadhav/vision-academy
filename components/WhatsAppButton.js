"use client";

import { useEffect, useState } from "react";
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
    <a className={lift ? "whatsapp lift" : "whatsapp"} href={href} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M16.01 3C9.4 3 4.05 8.34 4.05 14.94c0 2.1.55 4.14 1.6 5.95L4 29l8.29-1.61a12 12 0 0 0 5.72 1.46h.01c6.61 0 11.96-5.34 11.96-11.94C29.98 8.34 22.62 3 16.01 3zm6.94 16.95c-.29.82-1.7 1.57-2.37 1.67-.6.09-1.36.13-2.2-.14-.5-.16-1.15-.38-1.98-.74-3.48-1.5-5.75-5.01-5.92-5.24-.17-.23-1.4-1.86-1.4-3.55s.88-2.52 1.2-2.86c.29-.32.64-.4.85-.4h.61c.2 0 .46-.04.72.55.29.68.97 2.36 1.05 2.53.09.17.14.38.03.6-.11.23-.17.37-.34.57-.17.2-.35.44-.5.59-.17.17-.34.35-.15.69.2.34.87 1.43 1.86 2.32 1.28 1.14 2.36 1.5 2.7 1.66.34.17.54.14.74-.08.2-.23.85-.99 1.08-1.33.23-.34.46-.28.77-.17.32.11 2.01.95 2.36 1.12.34.17.57.26.66.4.08.14.08.82-.21 1.64z" />
      </svg>
    </a>
  );
}
