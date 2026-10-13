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
      <img src="/images/whatsapp.svg" alt="" />
    </a>
  );
}
