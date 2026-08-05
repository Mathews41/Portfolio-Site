import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
