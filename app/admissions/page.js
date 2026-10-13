import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { Icon } from "@/components/Icons";

export const metadata = { title: "Admissions" };

const steps = [
  ["01", "clipboard", "Tell us the class", "State Board or CBSE, Semi-English or English, or class 11 and 12 Science."],
  ["02", "send", "Send the form", "Add a mobile number. The academy calls you back."],
  ["03", "users", "Counselling", "Anil Mala Sir matches the student to a batch at Ring Road."],
  ["04", "clock", "Confirm the timing", "Days and fees are set in person so the class fits school."],
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        kicker="ADMISSIONS"
        icon="clipboard"
        title="Start with counselling"
        text="There is no online payment. You enrol after a conversation at the centre."
      />
      <section className="section">
        <div className="wrap">
          <div className="center" style={{ marginBottom: "1.4rem" }}>
            <p className="kicker">HOW TO JOIN</p>
            <h2>Four steps</h2>
          </div>
          <div className="step-grid">
            {steps.map(([n, icon, title, text]) => (
              <article className="step-card" key={n}>
                <span className="icon-chip"><Icon name={icon} /></span>
                <span className="step-no">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <article className="panel">
            <p className="kicker"><Icon name="clock" size={16} />BATCHES</p>
            <h2>Timings are fixed with you</h2>
            <p>Each course has its own batch. The clock time is chosen during counselling, using the student’s school or college timetable. Bring that timetable when you visit Ring Road, near JDCC Bank.</p>
          </article>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
