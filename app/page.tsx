import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <About />
      <Contact />
      {/* Footer can be a simple component or inline here for now */}
      <footer className="bg-zinc-950 py-8 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Hardware and Shankar Cement Center. All rights reserved.</p>
      </footer>
    </main>
  );
}
