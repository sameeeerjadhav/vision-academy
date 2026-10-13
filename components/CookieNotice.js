"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem("va-cookie") !== "accepted");
  }, []);

  if (!visible) return null;

  return (
    <div className="cookie" role="dialog" aria-label="Cookie notice">
      <p>This site stores one cookie in your browser so this notice stays closed. Read the <Link href="/cookie-policy">cookie policy</Link>.</p>
      <button
        className="btn btn-yellow"
        type="button"
        onClick={() => {
          localStorage.setItem("va-cookie", "accepted");
          window.dispatchEvent(new Event("va-cookie"));
          setVisible(false);
        }}
      >
        Accept
      </button>
    </div>
  );
}
