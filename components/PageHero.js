import { Icon } from "@/components/Icons";

export default function PageHero({ kicker, title, text, icon = "cap" }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <p className="kicker"><Icon name={icon} size={16} />{kicker}</p>
        <h1>{title}</h1>
        {text ? <p>{text}</p> : null}
      </div>
    </section>
  );
}
