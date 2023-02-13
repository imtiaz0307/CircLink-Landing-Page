import { useRef } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  const heroSection = useRef()
  const featureSection = useRef()
  const aboutSection = useRef()
  const contactSection = useRef()
  return (
    <div className='App'>
      <Navbar hero={heroSection} feature={featureSection} about={aboutSection} contact={contactSection} />
      <Hero hero={heroSection} features={featureSection} />
      <Features features={featureSection} />
      <About about={aboutSection} />
      <Contact contact={contactSection} />
      <Footer />
    </div>
  )
}

export default App
