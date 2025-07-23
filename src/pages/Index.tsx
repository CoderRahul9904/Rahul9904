import Navbar from "@/components/portfolio/Navbar"
import Hero from "@/components/portfolio/Hero"
import About from "@/components/portfolio/About"
import Skills from "@/components/portfolio/Skills"
import Projects from "@/components/portfolio/Projects"
import Experience from "@/components/portfolio/Experience"
import Contact from "@/components/portfolio/Contact"
import Footer from "@/components/portfolio/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
