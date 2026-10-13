import PageHero from "@/components/PageHero";

export const metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero kicker="LEGAL" title="Cookie policy" text="This website stores one preference in your browser." />
      <section className="section">
        <div className="wrap prose panel">
          <p>The only saved item is your choice on the cookie notice, so the notice stays closed on the next visit. It is not used for advertising.</p>
          <h2>What is stored</h2>
          <p>Name: va-cookie. Value: accepted. Purpose: remember that you accepted the notice.</p>
          <h2>Enquiry form</h2>
          <p>If you send an admission enquiry, the student name, parent name, mobile number, course, and message are kept so the academy can call you back. That information is not stored in a cookie.</p>
          <h2>Your choice</h2>
          <p>Clear this site’s data in your browser and the notice will show again.</p>
        </div>
      </section>
    </>
  );
}
