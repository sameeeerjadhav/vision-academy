import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { academy } from "@/data/content";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="CONTACT"
        title="Visit, or send an enquiry"
        text="Share your mobile number and the course. The academy will call you back."
      />
      <section className="section">
        <div className="wrap split">
          <article className="panel address">
            <h2>Vision Academy</h2>
            <p>
              {academy.legal}<br />
              {academy.address.map((line) => (
                <span key={line}>{line}<br /></span>
              ))}
            </p>
            <p><a href={academy.maps} target="_blank" rel="noreferrer">Open in Google Maps</a></p>
            <iframe className="map" title="Map showing Ring Road, Jalgaon near JDCC Bank" loading="lazy" src={academy.mapsEmbed} />
          </article>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
