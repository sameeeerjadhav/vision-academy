export default function PageHero({ kicker, title, text }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {text ? <p>{text}</p> : null}
      </div>
    </section>
  );
}
