import PageHero from "@/components/PageHero";
import { notices } from "@/data/content";

export const metadata = { title: "Notices" };

export default function NoticesPage() {
  return (
    <>
      <PageHero kicker="NOTICES" title="What families should know" text="Counselling and the course list, kept in one place." />
      <section className="section">
        <div className="wrap narrow stack">
          {notices.map((notice) => (
            <article className="notice" key={notice.title}>
              <time>{notice.date}</time>
              <h2>{notice.title}</h2>
              <p>{notice.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
