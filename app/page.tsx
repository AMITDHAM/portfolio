import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Projects from '@/app/components/Projects';
import ResumeSnippet from '@/app/components/ResumeSnippet';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <ResumeSnippet />
      <Footer />
    </main>
  );
}
