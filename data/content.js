export const academy = {
  name: "Vision Academy",
  legal: "Anil Mala's Vision Academy",
  city: "Jalgaon",
  phone: "",
  address: ["In front of Saraswat Bank,", "Near JDCC Bank, Ring Road,", "Jalgaon 425001, Maharashtra"],
  maps: "https://www.google.com/maps/search/?api=1&query=Saraswat+Bank+near+JDCC+Bank+Ring+Road+Jalgaon+425001",
  mapsEmbed: "https://maps.google.com/maps?q=JDCC%20Bank%20Ring%20Road%20Jalgaon&z=16&output=embed",
  whatsapp: "919028123928",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/admissions", label: "Admissions" },
  { href: "/mentors", label: "Mentors" },
  { href: "/achievements", label: "Achievements" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { icon: "student", value: "5–10", label: "Standards", note: "State Board and CBSE" },
  { icon: "teacher", value: "11–12", label: "Science", note: "Physics, Chemistry, Maths, Biology" },
  { icon: "grads", value: "3", label: "Entrance Exams", note: "JEE, NEET and MHT-CET" },
  { icon: "reviews", value: "Google", label: "Reviews", note: "Open the academy listing", href: academy.maps },
];

export const reasons = [
  { icon: "people", title: "Full guidance", text: "A clear plan for the year, from school chapters to entrance practice." },
  { icon: "target", title: "Personal attention", text: "Batches stay close enough for a teacher to see where a student is stuck." },
  { icon: "book", title: "State Board and CBSE", text: "Standards 5 to 10 in Semi-English and English medium." },
  { icon: "bulb", title: "Doubt support", text: "Questions are taken up in class, not left for the night before a test." },
  { icon: "clock", title: "Counselling first", text: "Anil Mala Sir helps parents choose the batch before a student joins." },
  { icon: "trophy", title: "Entrance with college", text: "JEE, NEET, and MHT-CET practice sits beside the class 11 and 12 syllabus." },
];

export const courses = [
  {
    title: "5th to 10th — State Board",
    badge: "Most Popular",
    subjects: "Mathematics, Science, English and the Maharashtra State Board syllabus",
    duration: "Full academic year",
    text: "School coaching for standards 5 to 10. Semi-English and English medium, including the SSC year.",
  },
  {
    title: "5th to 10th — CBSE",
    badge: "",
    subjects: "Mathematics, Science, English and the CBSE syllabus",
    duration: "Full academic year",
    text: "The same standards on the CBSE pattern, in Semi-English and English medium.",
  },
  {
    title: "11th & 12th Science — PCM",
    badge: "",
    subjects: "Physics, Chemistry, Mathematics",
    duration: "Full academic year",
    text: "Junior college science for students whose group is PCM.",
  },
  {
    title: "11th & 12th Science — PCB",
    badge: "",
    subjects: "Physics, Chemistry, Biology",
    duration: "Full academic year",
    text: "Junior college science for students whose group is PCB.",
  },
  {
    title: "JEE, NEET & MHT-CET",
    badge: "Advanced",
    subjects: "Physics, Chemistry, Mathematics, Biology",
    duration: "With the science year",
    text: "A special entrance batch so board studies and entrance practice stay together.",
  },
];

export const mentors = [
  {
    initials: "AM",
    tag: "Mentor",
    name: "Anil Mala Sir",
    role: "Founder & Mentor",
    note: "Counselling and academic direction for every batch",
  },
  {
    initials: "5–10",
    tag: "School",
    name: "School Faculty",
    role: "Standards 5 to 10",
    note: "State Board and CBSE, Semi-English and English",
  },
  {
    initials: "PCB",
    tag: "Science",
    name: "Science Faculty",
    role: "Physics, Chemistry, Maths, Biology",
    note: "Class 11, class 12, and the entrance batch",
  },
];

export const achievements = [
  { exam: "SSC & CBSE", detail: "Class 10 board preparation for State Board and CBSE." },
  { exam: "HSC Science", detail: "Class 12 Physics, Chemistry, Mathematics, and Biology." },
  { exam: "JEE", detail: "Engineering entrance practice for PCM students." },
  { exam: "NEET", detail: "Medical entrance practice for PCB students." },
  { exam: "MHT-CET", detail: "Maharashtra CET practice alongside HSC Science." },
];

export const notices = [
  {
    date: "Current",
    title: "Counselling is available",
    text: "Anil Mala Sir is meeting parents for standards 5 to 10, class 11 and 12 Science, and the JEE, NEET, and MHT-CET batch.",
  },
  {
    date: "26 December 2023",
    title: "Course list on record",
    text: "The academy announced the same courses: class 5 to 10 (State Board and CBSE), class 11 and 12 Science, and the entrance batch.",
  },
];

export const courseOptions = [
  "Class 5 — State Board",
  "Class 6 — State Board",
  "Class 7 — State Board",
  "Class 8 — State Board",
  "Class 9 — State Board",
  "Class 10 — State Board (SSC)",
  "Class 5 — CBSE",
  "Class 6 — CBSE",
  "Class 7 — CBSE",
  "Class 8 — CBSE",
  "Class 9 — CBSE",
  "Class 10 — CBSE",
  "Class 11 — PCM",
  "Class 11 — PCB",
  "Class 12 — PCM",
  "Class 12 — PCB",
  "JEE special batch",
  "NEET special batch",
  "MHT-CET special batch",
];
