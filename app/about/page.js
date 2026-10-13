import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Icon, Mini } from "@/components/Icons";
import { reasons } from "@/data/content";

const featureIcons = {
  people: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 19c.6-2.6 2.8-4 5-4s4.4 1.4 5 4M14 19c.3-1.6 1.5-2.8 3-3.2",
  target: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  book: "M4 5h7a3 3 0 0 1 3 3v12H7a3 3 0 0 0-3 3V5zM20 5h-7a3 3 0 0 0-3 3v12h7a3 3 0 0 1 3 3V5z",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3 11c.5.4 1 1.2 1 2h4c0-.8.5-1.6 1-2a6 6 0 0 0-3-11z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v6l4 2",
  trophy: "M8 4h8v5a4 4 0 0 1-8 0V4zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v3M9 20h6",
};

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="ABOUT US"
        icon="users"
        title="Why families come to Vision Academy"
        text="Anil Mala's coaching centre on Ring Road, Jalgaon. In front of Saraswat Bank, near JDCC Bank."
      />
      <section className="section why">
        <div className="wrap why-grid">
          <div>
            <p className="kicker">OUR STORY</p>
            <h2>A class with a clear aim</h2>
            <p className="sub">Vision Academy teaches for a better future of students, and for the satisfaction of parents. Anil Mala Sir leads counselling, so the board, the medium, and the exam are chosen before a student joins.</p>
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
            <Link className="btn btn-yellow" href="/admissions">Enroll Now →</Link>
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
        <div className="wrap">
          <div className="center">
            <p className="kicker">WHO IT IS FOR</p>
            <h2>Three groups. One centre.</h2>
            <p className="sub">School, junior college, and entrance preparation sit on Ring Road, so a family does not have to split coaching across the city.</p>
          </div>
          <div className="course-grid">
            <article className="course-card">
              <span className="icon-chip"><Icon name="book" /></span>
              <h3>Standards 5 to 10</h3>
              <p>Maharashtra State Board and CBSE, in Semi-English and English medium.</p>
            </article>
            <article className="course-card">
              <span className="icon-chip"><Icon name="flask" /></span>
              <h3>11th and 12th Science</h3>
              <p>Physics, Chemistry, Mathematics, and Biology for PCM and PCB.</p>
            </article>
            <article className="course-card">
              <span className="icon-chip"><Icon name="cap" /></span>
              <h3>Entrance batch</h3>
              <p>JEE, NEET, and MHT-CET practice alongside the science syllabus.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
