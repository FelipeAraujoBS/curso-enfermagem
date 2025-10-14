import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Courses />
      <About />
      <Contact />
    </main>
  );
}
