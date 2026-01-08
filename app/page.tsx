import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import MapSection from './components/MapSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <About />
      <MapSection />
      <Contact />
    </main>
  );
}
