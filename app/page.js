import Navbar from "@/components/Navbar";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Image from "next/image";
import Skills from "@/components/section/Skills";
import Projects from "@/components/section/Projects";
import Contact from "@/components/section/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
