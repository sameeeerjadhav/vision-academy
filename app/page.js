import Link from "next/link";
import { courses, mentors, reasons, stats } from "@/data/content";
import GoogleReviews from "@/components/GoogleReviews";
import { Mini, StatIcon } from "@/components/Icons";

const featureIcons = {
  people: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 19c.6-2.6 2.8-4 5-4s4.4 1.4 5 4M14 19c.3-1.6 1.5-2.8 3-3.2",
  target: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
  book: "M4 5h7a3 3 0 0 1 3 3v12H7a3 3 0 0 0-3 3V5zM20 5h-7a3 3 0 0 0-3 3v12h7a3 3 0 0 1 3 3V5z",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3 11c.5.4 1 1.2 1 2h4c0-.8.5-1.6 1-2a6 6 0 0 0-3-11z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v6l4 2",
  trophy: "M8 4h8v5a4 4 0 0 1-8 0V4zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v3M9 20h6M10 17h4",
};

const featured = [courses[0], courses[1], courses[4]];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-copy">
          <p className="pill"><i /> Trusted coaching in Jalgaon</p>
          <h1>Best Coaching Classes in <span>Jalgaon for School, Science &amp; Entrance</span></h1>
          <p className="pin">📍 Near JDCC Bank, Ring Road, Jalgaon</p>
          <p className="lede">At Anil Mala&apos;s Vision Academy, students get full guidance, support, and personal attention. State Board, CBSE, class 11 and 12 Science, plus JEE, NEET, and MHT-CET.</p>
          <div className="hero-actions">
            <Link className="btn btn-yellow" href="/admissions">Enroll Now →</Link>
            <Link className="btn btn-outline" href="/contact">Call Now</Link>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Academy at a glance">
        <div className="wrap stats-grid">
          {stats.map((item) => (
            <div key={item.label}>
              <StatIcon name={item.icon} />
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
        <svg className="skyline" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 90h40V60h30V40h20V70h40V30h50V80h30V50h40V90h60V35h25V75h40V20h30V90h50V55h35V90h80V25h20V65h45V90h70V40h30V90h60V15h25V70h40V90h90V45h40V90h80V30h30V90H1200" fill="none" stroke="white" strokeWidth="1.4" />
        </svg>
      </section>

      <section className="section why">
        <div className="wrap why-grid">
          <div>
            <p className="kicker">ABOUT US</p>
            <h2>Why Choose Vision Academy?</h2>
            <p className="sub">Quality education for a better future of students, and satisfaction for parents. Counselling starts with Anil Mala Sir.</p>
            <div className="features">
              {reasons.map((item) => (
                <article className="feature" key={item.title}>
                  <div className="feature-icon"><Mini d={featureIcons[item.icon]} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <Link className="btn btn-navy" href="/about">Learn More About Us →</Link>
          </div>
          <div className="why-photo">
            <img src="/images/about.jpg" alt="Students and a teacher in a classroom" />
            <div className="year-badge">
              <strong>5–12</strong>
              <span>Standards under one roof</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap center">
          <p className="kicker">OUR PROGRAMS</p>
          <h2>Our Best Featured Courses</h2>
          <p className="sub">Coaching for school, junior college science, and entrance exams.</p>
          <div className="course-grid">
            {featured.map((course) => (
              <article className="course-card" key={course.title}>
                {course.badge ? <span className="badge">{course.badge}</span> : <span className="badge" style={{ visibility: "hidden" }}>.</span>}
                <h3>{course.title}</h3>
                <div className="meta">
                  <Mini d="M5 5h6v14H5zM13 5h6v14h-6z" />
                  <span><b>SUBJECTS</b>{course.subjects}</span>
                </div>
                <div className="meta">
                  <Mini d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v6l4 2" />
                  <span><b>DURATION</b>{course.duration}</span>
                </div>
                <Link className="btn btn-yellow btn-block" href="/admissions">Enroll Now →</Link>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "1.4rem" }}>
            <Link className="btn btn-yellow" href="/courses">View All Courses →</Link>
          </div>
        </div>
      </section>

      <GoogleReviews />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap center">
          <p className="kicker">OUR TEAM</p>
          <h2>Meet Our Mentors</h2>
          <p className="sub">Anil Mala Sir leads counselling. Subject teaching covers school, science, and entrance.</p>
          <div className="mentor-grid">
            {mentors.map((mentor) => (
              <article className="mentor-card" key={mentor.name}>
                <div className="mentor-photo">
                  <span>{mentor.initials}</span>
                  <em className="mentor-tag">{mentor.tag}</em>
                </div>
                <h3>{mentor.name}</h3>
                <p className="role">{mentor.role}</p>
                <p className="note">{mentor.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
