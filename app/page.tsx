import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import About from "@/sections/About";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";
import WhatsAppButton from "@/components/WhatsAppButton";

import Particles from "@/components/Particles";


export default function Home() {
  return (
    <main>
      <Particles />

      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
      
    </main>
  );
}