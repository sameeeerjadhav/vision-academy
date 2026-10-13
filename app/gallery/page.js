import PageHero from "@/components/PageHero";

export const metadata = { title: "Gallery" };

const photos = [
  ["/images/hero.jpg", "Classroom"],
  ["/images/about.jpg", "Guidance"],
  ["/images/class.jpg", "Study hall"],
  ["/images/hero.jpg", "Board work"],
  ["/images/class.jpg", "Batch day"],
  ["/images/about.jpg", "Counselling"],
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="GALLERY"
        title="Classrooms and the centre"
        text="These sample classroom pictures hold the layout. They will be replaced with photographs from the Ring Road centre."
      />
      <section className="section">
        <div className="wrap gallery">
          {photos.map(([src, caption]) => (
            <figure key={caption}>
              <img src={src} alt={caption} />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
