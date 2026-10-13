import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { notices } from "@/data/content";

export const metadata = { title: "Notices" };

export default function NoticesPage() {
  return (
    <>
      <PageHero kicker="NOTICES" icon="bell" title="What families should know" text="Counselling and the course list, kept in one place." />
      <section className="section">
        <div className="wrap narrow stack">
          {notices.map((notice) => (
            <article className="notice" key={notice.title}>
              <span className="icon-chip"><Icon name="bell" /></span>
              <div>
                <time>{notice.date}</time>
                <h2>{notice.title}</h2>
                <p>{notice.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
