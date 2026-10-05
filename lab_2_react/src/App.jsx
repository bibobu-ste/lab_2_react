import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Education />
        <Projects />
        <Skills />
        <Languages />
      </main>
      <Footer />
    </>
  );
}

export default App;