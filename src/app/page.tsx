import { Services } from '@/components/services';
import { Technologies } from '@/components/technologies';
import { Contact } from '@/components/contact';
import { Hero } from '@/components/hero';
import { Footer } from '@/components/footer';
import { Nav } from '@/components/nav';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>
      <section id="expertise">
        <Services />
      </section>
      <section id="stack">
        <Technologies />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
} 