import PageHero from "@/components/PageHero";
import { notices } from "@/data/content";

export const metadata = { title: "Notices" };

export default function NoticesPage() {
  return (
    <>
      <PageHero kicker="NOTICES" title="What families should know" />
      <section className="section">
        <div className="wrap" style={{ display: "grid", gap: "0.8rem" }}>
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
