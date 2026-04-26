import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Community from './components/Community'
import Stats from './components/Stats'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="bg-minecraft-void text-minecraft-text">
      <Hero />
      <Features />
      <HowItWorks />
      <Community />
      <Stats />
      <CTAFinal />
      <Footer />
    </main>
  )
}
