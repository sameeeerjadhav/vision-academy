import PageHero from "@/components/PageHero";

export const metadata = { title: "Gallery" };

const photos = [
  ["/images/hero.jpg", "Classroom"],
  ["/images/about.jpg", "Guidance"],
  ["/images/class.jpg", "Study hall"],
  ["/images/class.jpg", "Board work"],
  ["/images/about.jpg", "Counselling"],
  ["/images/hero.jpg", "Batch day"],
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="GALLERY"
        title="Inside the classroom"
        text="Sample classroom pictures hold these frames until photographs from the Ring Road centre are added."
      />
      <section className="section">
        <div className="wrap gallery">
          {photos.map(([src, caption], index) => (
            <figure key={`${caption}-${index}`}>
              <img src={src} alt="" />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
