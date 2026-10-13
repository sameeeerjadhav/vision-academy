import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Mini } from "@/components/Icons";
import { courses } from "@/data/content";

export const metadata = { title: "Courses" };

export default function CoursesPage() {
  return (
    <>
      <PageHero
        kicker="OUR PROGRAMS"
        title="Every course the academy runs"
        text="Standards 5 to 10 on State Board and CBSE, class 11 and 12 Science, and a special batch for JEE, NEET, and MHT-CET."
      />
      <section className="section">
        <div className="wrap course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              {course.badge ? <span className="badge">{course.badge}</span> : null}
              <h3>{course.title}</h3>
              <p style={{ color: "var(--muted)" }}>{course.text}</p>
              <div className="meta">
                <Mini d="M5 5h6v14H5zM13 5h6v14h-6z" />
                <span><b>SUBJECTS</b>{course.subjects}</span>
              </div>
              <div className="meta">
                <Mini d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v6l4 2" />
                <span><b>DURATION</b>{course.duration}</span>
              </div>
              <p style={{ color: "var(--muted)", fontSize: "0.92rem" }}>Medium for school batches: Semi-English and English. Fees are explained at counselling.</p>
              <Link className="btn btn-yellow btn-block" href="/admissions">Enroll Now →</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
