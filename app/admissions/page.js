import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = { title: "Admissions" };

const steps = [
  ["01", "Tell us the class", "State Board or CBSE, Semi-English or English, or class 11 / 12 Science."],
  ["02", "Send the form", "Add a mobile number. The academy calls you back."],
  ["03", "Counselling", "Anil Mala Sir matches the student to a batch at the Ring Road centre."],
  ["04", "Confirm the timing", "Days and fees are explained in person so the class fits the school day."],
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        kicker="ADMISSIONS"
        title="Start with counselling"
        text="There is no online payment. You enrol after a conversation at the centre."
      />
      <section className="section">
        <div className="wrap split">
          <div>
            <ol className="steps">
              {steps.map(([n, title, text]) => (
                <li key={n}><span>{n}</span><strong>{title}.</strong> {text}</li>
              ))}
            </ol>
            <article className="panel" style={{ marginTop: "1rem" }}>
              <h2>Batches &amp; timings</h2>
              <p>Each course has its own batch. The clock time is fixed during counselling, using the student’s school or college timetable. Bring that timetable when you visit Ring Road.</p>
            </article>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
