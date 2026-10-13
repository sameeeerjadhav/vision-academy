import PageHero from "@/components/PageHero";
import { mentors } from "@/data/content";

export const metadata = { title: "Mentors" };

export default function MentorsPage() {
  return (
    <>
      <PageHero
        kicker="OUR TEAM"
        title="Meet our mentors"
        text="Anil Mala Sir leads the academy. Named subject profiles are added when the academy shares them."
      />
      <section className="section">
        <div className="wrap mentor-grid">
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
        <div className="wrap panel" style={{ marginTop: "1.2rem" }}>
          <h2>How teaching is organised</h2>
          <p>School faculty take standards 5 to 10 for State Board and CBSE. Science faculty take Physics, Chemistry, Mathematics, and Biology for class 11, class 12, and the entrance batch. Ask in counselling who teaches your standard.</p>
        </div>
      </section>
    </>
  );
}
