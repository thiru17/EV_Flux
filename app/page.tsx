import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import StatsSection from "./components/StatsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <StatsSection />
      {/* Social Proof is integrated in Hero/Stats roughly, keeping it simple for now */}
      <Footer />
    </main>
  );
}
