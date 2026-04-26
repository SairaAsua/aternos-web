import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CoinIcon, LightningIcon, PuzzleIcon, ShieldIcon, PeopleIcon } from './Icons'

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, rotateX: 90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          delay: index * 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            toggleActions: 'play none none none'
          },
          ease: 'back.out'
        }
      )

      // Hover effect
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -10, boxShadow: '0 20px 25px rgba(93, 154, 60, 0.4)', duration: 0.3 })
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, boxShadow: '0 0 0 rgba(93, 154, 60, 0)', duration: 0.3 })
      })
    })
  }, [])

  const features = [
    {
      icon: CoinIcon,
      title: 'Completamente Gratis',
      desc: 'Cero pagos. Para siempre. Sin sorpresas.'
    },
    {
      icon: LightningIcon,
      title: 'Fácil de Usar',
      desc: '1-click para crear. Configura en minutos.'
    },
    {
      icon: PuzzleIcon,
      title: 'Java + Bedrock',
      desc: 'Cualquier edición. Tu servidor, tus reglas.'
    },
    {
      icon: ShieldIcon,
      title: 'Mods & Plugins',
      desc: 'Librería completa. Personaliza todo.'
    },
    {
      icon: ShieldIcon,
      title: 'Backups + DDoS',
      desc: 'Automático y seguro. 24/7 protegido.'
    },
    {
      icon: PeopleIcon,
      title: 'Multiplayer Infinito',
      desc: 'Juega con amigos sin límites.'
    }
  ]

  return (
    <section ref={containerRef} className="bg-minecraft-dirt py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-pressstart text-center mb-16 text-minecraft-grass drop-shadow-lg">
          CARACTERÍSTICAS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                ref={el => cardsRef.current[i] = el}
                className="minecraft-block p-6 hover:bg-minecraft-grass/20 transition-colors duration-300 group cursor-pointer perspective"
              >
                <div className="mb-4 group-hover:scale-125 transition-transform duration-300">
                  <Icon />
                </div>
                <h3 className="text-lg font-pressstart mb-3 text-minecraft-diamond">
                  {feature.title}
                </h3>
                <p className="font-vt323 text-minecraft-text/90 text-sm">
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
