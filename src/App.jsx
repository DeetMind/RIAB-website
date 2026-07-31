import Nav from './components/Nav'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Tracks from './components/Tracks'
import SampleOutput from './components/SampleOutput'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Tracks />
        <SampleOutput />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
