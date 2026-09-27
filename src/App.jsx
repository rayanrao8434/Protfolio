import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Surprises from "./components/Surprises"
import "./App.css"

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-ink">
      <div className="notebook-margin" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 left-[-8%] h-72 w-72 rounded-full bg-blush-300/50 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6%] top-40 h-80 w-80 rounded-full bg-blush-200/80 blur-3xl" />
      <div className="pointer-events-none absolute bottom-24 left-1/3 h-64 w-64 rounded-full bg-blush-400/30 blur-3xl" />
      <Surprises />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App