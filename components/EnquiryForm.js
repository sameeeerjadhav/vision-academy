"use client";

import { useState } from "react";
import { courseOptions } from "@/data/content";

export default function EnquiryForm() {
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.company) return;
    setSending(true);
    setStatus({ type: "", text: "Sending your enquiry…" });
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await response.json();
      if (!response.ok || !body.ok) {
        setStatus({ type: "err", text: body.error || "The enquiry could not be sent." });
        return;
      }
      form.reset();
      setStatus({ type: "ok", text: "Enquiry received. Vision Academy will contact you on the mobile number you shared." });
    } catch {
      setStatus({ type: "err", text: "The enquiry could not be sent. Please visit the centre on Ring Road." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="form panel" onSubmit={onSubmit}>
      <p className="hp" aria-hidden="true"><label>Company <input name="company" tabIndex={-1} autoComplete="off" /></label></p>
      <label>Student name <input name="student" required autoComplete="name" /></label>
      <label>Parent / guardian name <input name="parent" required /></label>
      <label>Mobile number <input name="mobile" required inputMode="tel" autoComplete="tel" placeholder="10-digit mobile" /></label>
      <label>Course
        <select name="course" required defaultValue="">
          <option value="" disabled>Select a course</option>
          {courseOptions.map((course) => <option key={course}>{course}</option>)}
        </select>
      </label>
      <label>Message <textarea name="message" placeholder="School timing, medium (Semi-English or English), or anything we should know." /></label>
      <button className="btn btn-yellow" type="submit" disabled={sending}>Enroll Now →</button>
      <p className={`form-status ${status.type}`} role="status">{status.text}</p>
    </form>
  );
}
