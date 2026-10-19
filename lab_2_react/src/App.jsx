import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[url('nihqbfwfkog91.jpg')] bg-cover bg-center bg-fixed text-left text-slate-800">
      <Header />
      <main className="mx-auto flex max-w-3xl flex-col gap-6 p-6">
        <About />
        <Education />
        <Projects />
        <Skills />
        <Languages />
      </main>
      <Footer />
    </div>
  );
}

export default App;