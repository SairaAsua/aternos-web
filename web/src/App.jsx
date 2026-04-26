import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Community from './components/Community'
import Stats from './components/Stats'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import MadeWithLove from './components/MadeWithLove'
import VideoShowcase from './components/VideoShowcase'

export default function App() {
  return (
    <main className="bg-minecraft-void text-minecraft-text overflow-x-hidden">
      <Hero />
      <Features />
      <VideoShowcase />
      <HowItWorks />
      <Stats />
      <Community />
      <CTAFinal />
      <MadeWithLove />
      <Footer />
    </main>
  )
}
