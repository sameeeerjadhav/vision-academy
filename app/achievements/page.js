import PageHero from "@/components/PageHero";
import { achievements } from "@/data/content";

export const metadata = { title: "Achievements" };

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        kicker="ACHIEVEMENTS"
        title="Boards and entrance exams"
        text="Scores are published here only after the academy confirms them. Nothing on this page is an invented result."
      />
      <section className="section">
        <div className="wrap achieve-grid">
          {achievements.map((item) => (
            <article className="panel" key={item.exam}>
              <p className="kicker">EXAM</p>
              <h2>{item.exam}</h2>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="wrap panel" style={{ marginTop: "1.2rem" }}>
          <h2>This year’s board</h2>
          <p>Student names and marks will be added each result season. If your family wants a confirmed result considered for this page, say so in the enquiry form.</p>
        </div>
      </section>
    </>
  );
}
