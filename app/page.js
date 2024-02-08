import Navbar from "@/components/Navbar";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Image from "next/image";
import Skills from "@/components/section/Skills";
import Projects from "@/components/section/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
