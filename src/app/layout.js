// import { Poppins, Inter, Gilda_Display } from "next/font/google";
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-poppins",
// });

// const gildaDisplay = Gilda_Display({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-gilda-display",
// });

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-inter",
// });

import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import FloatingIcons from "./components/common/FloatingIcons";

export const metadata = {
  title: "Base Eleven | Hotel and Convention Center",
  description: "Where stories begin",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={`${poppins.variable} ${inter.variable} ${gildaDisplay.variable}`}
      >
        <div className="wrap">
          <Header />
          {children}
          <Footer />
          <FloatingIcons />
        </div>
      </body>
    </html>
  );
}
