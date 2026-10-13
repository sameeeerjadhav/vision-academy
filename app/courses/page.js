import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { courses } from "@/data/content";

export const metadata = { title: "Courses" };

export default function CoursesPage() {
  return (
    <>
      <PageHero
        kicker="OUR PROGRAMS"
        icon="book"
        title="Every course the academy runs"
        text="Standards 5 to 10 on State Board and CBSE, class 11 and 12 Science, and a special batch for JEE, NEET, and MHT-CET."
      />
      <section className="section">
        <div className="wrap">
          <div className="center">
            <p className="kicker">CHOOSE A BATCH</p>
            <h2>School, science, and entrance</h2>
            <p className="sub">Semi-English and English for school batches. Fees are explained at counselling, not on this page.</p>
          </div>
          <div className="course-grid">
            {courses.map((course) => (
              <article className="course-card" key={course.title}>
                <div className="course-top">
                  <span className="icon-chip"><Icon name={course.icon} /></span>
                  {course.badge ? <span className={course.badge === "Advanced" ? "badge badge-advanced" : "badge"}>{course.badge}</span> : <span />}
                </div>
                <h3>{course.title}</h3>
                <p className="course-text">{course.text}</p>
                <div className="course-facts">
                  <div className="meta">
                    <Icon name="book" size={18} />
                    <span><b>SUBJECTS</b>{course.subjects}</span>
                  </div>
                  <div className="meta">
                    <Icon name="clock" size={18} />
                    <span><b>DURATION</b>{course.duration}</span>
                  </div>
                </div>
                <Link className="btn btn-yellow btn-block" href="/admissions">Enroll Now →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
