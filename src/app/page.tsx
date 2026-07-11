import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Reel } from "@/components/Reel";
import { Resume } from "@/components/Resume";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Reel />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
