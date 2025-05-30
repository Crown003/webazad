import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "HomeGallery",
  description: "Exquisite, handcrafted furniture built on over 25 years of expertise and a commitment to sustainable materials. Elevate your home with timeless design and enduring quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
