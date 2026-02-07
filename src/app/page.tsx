
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Mentorship from "@/components/Mentorship";
import TechStack from "@/components/TechStack";
import Workflow from "@/components/Workflow";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Mentorship />
      <TechStack />
      <Workflow />
      <Footer />
    </div>
  );
}
