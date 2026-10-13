import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Mini } from "@/components/Icons";
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
        title="Why families come to Vision Academy"
        text="Anil Mala's coaching centre on Ring Road, Jalgaon. In front of Saraswat Bank, near JDCC Bank."
      />
      <section className="section">
        <div className="wrap why-grid">
          <div className="prose">
            <h2>A class with a clear aim</h2>
            <p>Vision Academy teaches for a better future of students and for the satisfaction of parents. School batches run from standard 5 to 10 for Maharashtra State Board and CBSE, in Semi-English and English. Science batches cover class 11 and 12. A special batch prepares students for JEE, NEET, and MHT-CET.</p>
            <p>Anil Mala Sir leads counselling. Parents sit with him before a student is placed in a batch, so the board, the medium, and the exam all match.</p>
            <Link className="btn btn-yellow" href="/admissions">Enroll Now →</Link>
          </div>
          <img className="about-photo" src="/images/about.jpg" alt="Classroom discussion" />
        </div>
        <div className="wrap features" style={{ marginTop: "2rem" }}>
          {reasons.map((item) => (
            <article className="feature panel" key={item.title}>
              <div className="feature-icon"><Mini d={featureIcons[item.icon]} /></div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
