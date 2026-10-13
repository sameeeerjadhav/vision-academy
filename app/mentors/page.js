import PageHero from "@/components/PageHero";
import { mentors } from "@/data/content";

export const metadata = { title: "Mentors" };

export default function MentorsPage() {
  return (
    <>
      <PageHero
        kicker="OUR TEAM"
        icon="users"
        title="Meet our mentors"
        text="Anil Mala Sir leads counselling. Subject teachers cover school, science, and entrance."
      />
      <section className="section">
        <div className="wrap">
          <div className="center" style={{ marginBottom: "0.4rem" }}>
            <p className="kicker">FACULTY</p>
            <h2>Who teaches</h2>
            <p className="sub">Named subject profiles are added when the academy shares them. Until then, ask in counselling who takes your standard.</p>
          </div>
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
