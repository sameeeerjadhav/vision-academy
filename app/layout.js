import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieNotice from "@/components/CookieNotice";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Vision Academy Jalgaon | Anil Mala's Coaching Classes",
    template: "%s | Vision Academy Jalgaon",
  },
  description: "Anil Mala's Vision Academy, Ring Road, Jalgaon. Coaching for standards 5 to 10, class 11 and 12 Science, and JEE, NEET, and MHT-CET.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
