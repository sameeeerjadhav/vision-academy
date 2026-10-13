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

export function Mini({ d }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d={d} strokeLinejoin="round" />
    </svg>
  );
}
