export function StudentIcon() {
  return (
    <svg className="stat-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="24" cy="16" r="6" />
      <path d="M10 36c2.2-6 7.4-9 14-9s11.8 3 14 9" />
      <path d="M16 22h16v4H16z" />
    </svg>
  );
}

export function TeacherIcon() {
  return (
    <svg className="stat-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="24" cy="14" r="5" />
      <path d="M14 34c1.4-5 5-8 10-8s8.6 3 10 8" />
      <path d="M30 20h8v10H30z" />
      <path d="M32 24h4" />
    </svg>
  );
}

export function GradsIcon() {
  return (
    <svg className="stat-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 20l16-8 16 8-16 8-16-8z" />
      <path d="M16 24v7c3 3 13 3 16 0v-7" />
      <path d="M40 20v10" />
    </svg>
  );
}

export function ReviewsIcon() {
  return (
    <svg className="stat-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="8" y="12" width="32" height="22" rx="3" />
      <path d="M18 34l-2 6 8-6" />
      <path d="M18 22h.1M24 22h.1M30 22h.1" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

const icons = { student: StudentIcon, teacher: TeacherIcon, grads: GradsIcon, reviews: ReviewsIcon };

export function StatIcon({ name }) {
  const Icon = icons[name] || ReviewsIcon;
  return <Icon />;
}

export function Icon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  const paths = {
    book: <><path d="M4 5h7a3 3 0 0 1 3 3v12H7a3 3 0 0 0-3 3V5z" /><path d="M20 5h-7a3 3 0 0 0-3 3v12h7a3 3 0 0 1 3 3V5z" /></>,
    flask: <><path d="M9 3h6" /><path d="M10 3v6L5 19a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 19l-5-10V3" /><path d="M8.5 14h7" /></>,
    cap: <><path d="M2 9l10-5 10 5-10 5L2 9z" /><path d="M6 11v4c2.2 1.5 9.8 1.5 12 0v-4" /><path d="M22 9v6" /></>,
    pin: <><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.2" /></>,
    chat: <path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 1 1 18 0z" />,
    bell: <><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15L6 16z" /><path d="M10 19a2 2 0 0 0 4 0" /></>,
    users: <><circle cx="9" cy="8" r="3" /><path d="M3 19c.6-3 3-4.5 6-4.5s5.4 1.5 6 4.5" /><circle cx="17" cy="9" r="2.2" /><path d="M16.5 14.6c1.8.3 3.2 1.4 3.8 4.4" /></>,
    clock: <><circle cx="12" cy="12" r="8" /><path d="M12 8v5l3 2" /></>,
    send: <path d="M4 12l16-7-7 16-2-7-7-2z" />,
    clipboard: <><rect x="6" y="4" width="12" height="16" rx="2" /><path d="M9 4.5h6V7H9z" /><path d="M9 11h6M9 15h4" /></>,
    star: <path d="M12 3.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.8 7.2 18.4l.9-5.4L4.2 9.2l5.4-.8L12 3.5z" />,
    shield: <path d="M12 3l8 3v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3z" />,
    camera: <><path d="M4 8h3l2-2h6l2 2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z" /><circle cx="12" cy="14" r="3" /></>,
    cookie: <><circle cx="12" cy="12" r="8" /><circle cx="9" cy="10" r="0.8" fill="currentColor" stroke="none" /><circle cx="14" cy="9" r="0.8" fill="currentColor" stroke="none" /><circle cx="13" cy="14" r="0.8" fill="currentColor" stroke="none" /><circle cx="8.5" cy="14.5" r="0.7" fill="currentColor" stroke="none" /></>,
  };
  return <svg {...common}>{paths[name] || paths.book}</svg>;
}

export function Mini({ d }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d={d} strokeLinejoin="round" />
    </svg>
  );
}
