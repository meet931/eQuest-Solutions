import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Halal Labs",
    template: "%s - My Awesome Blog",
  },
  description: "Come and read my awesome articles!",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased bg-gradient-to-b from-[#CEFFB8] via-[#91F2CF] to-[#3CFFCE]`}
      >
        <Header />
        {children}        

        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
