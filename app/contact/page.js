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
            <p className="kicker">THE CENTRE</p>
            <h2>Ring Road, Jalgaon</h2>
            <p>
              {academy.legal}<br />
              {academy.address.map((line) => (
                <span key={line}>{line}<br /></span>
              ))}
            </p>
            <div className="contact-links">
              <a href={academy.maps} target="_blank" rel="noreferrer">Open in Google Maps</a>
              <a href={`https://wa.me/${academy.whatsapp}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
            <iframe className="map" title="Map showing Ring Road, Jalgaon near JDCC Bank" loading="lazy" src={academy.mapsEmbed} />
          </article>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
