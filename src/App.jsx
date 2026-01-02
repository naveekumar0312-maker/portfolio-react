import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Reveal from "./components/Reveal";

export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO (no reveal – should be instant) */}
      <Hero />

      {/* ABOUT */}
      <Reveal>
        <About />
      </Reveal>

      {/* SKILLS */}
      <Reveal>
        <Skills />
      </Reveal>

      {/* PROJECTS */}
      <Reveal>
        <Projects />
      </Reveal>

      {/* CONTACT */}
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
