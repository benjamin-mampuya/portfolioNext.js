import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

export default function Home() {
  return (
    <main className="bg-background min-h-[100vh] text-textMain font-inter selection:bg-primary selection:text-background flex flex-col">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
