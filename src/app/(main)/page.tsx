import Image from "next/image";
import HeroSection from "@/components/herosection";
import AboutSection from "@/components/about";
import ProductShowcase from "@/components/product";
import ContactSection from "@/components/contact";

export default function Home() {
  return (
   <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProductShowcase />
        <ContactSection />
      </main>
  );
}
