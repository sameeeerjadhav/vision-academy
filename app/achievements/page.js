import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { achievements } from "@/data/content";

const examIcons = {
  "SSC & CBSE": "book",
  "HSC Science": "flask",
  JEE: "cap",
  NEET: "shield",
  "MHT-CET": "star",
};

export const metadata = { title: "Achievements" };

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        kicker="ACHIEVEMENTS"
        icon="star"
        title="Boards and entrance exams"
        text="Students prepare for these exams. Names and marks are added only after the academy confirms them."
      />
      <section className="section">
        <div className="wrap">
          <div className="center" style={{ marginBottom: "0.2rem" }}>
            <p className="kicker">EXAMS</p>
            <h2>What the batches prepare for</h2>
          </div>
          <div className="achieve-grid">
            {achievements.map((item) => (
              <article className="panel" key={item.exam}>
                <span className="icon-chip"><Icon name={examIcons[item.exam]} /></span>
                <h2 style={{ fontSize: "1.45rem" }}>{item.exam}</h2>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <article className="panel" style={{ marginTop: "1rem" }}>
            <h2>This year’s board</h2>
            <p>The scoreboard stays empty until a result is confirmed. If your family wants a mark considered for this page, say so in the enquiry.</p>
            <p style={{ marginTop: "0.9rem" }}><Link className="btn btn-yellow" href="/contact">Send a result note</Link></p>
          </article>
        </div>
      </section>
    </>
  );
}
