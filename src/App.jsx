import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceMarquee from './components/ServiceMarquee';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans">
      <Navbar />
      <Hero />
      <ServiceMarquee />
      <About />
      <Services />
      <Pricing />
      <Projects />
      <CTA />
      <Footer />
    </main>
  );
}
