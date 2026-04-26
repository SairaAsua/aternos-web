import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CoinIcon, LightningIcon, GamepadIcon, PuzzleIcon, ShieldIcon, PeopleIcon } from './Icons'

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, rotateX: 45 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          },
          ease: 'back.out(1.4)'
        }
      )

      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -8, duration: 0.3, ease: 'power2.out' })
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' })
      })
    })
  }, [])

  const features = [
    {
      icon: CoinIcon,
      title: 'Completamente Gratis',
      desc: 'No hay coste mensual. Nunca. Siempre gratuito para todos. Apoyo publicitario = servicio gratuito eternamente.',
      color: 'hover:border-minecraft-diamond/50'
    },
    {
      icon: LightningIcon,
      title: 'F\u00e1cil de Usar',
      desc: 'Crea un servidor en minutos desde la interfaz web. Configuraci\u00f3n simple. Gestión sin complicaciones.',
      color: 'hover:border-minecraft-creeper/50'
    },
    {
      icon: GamepadIcon,
      title: 'Java + Bedrock',
      desc: 'Elige tu edici\u00f3n: Java Edition cl\u00e1sica o Bedrock Edition para Windows 10, m\u00f3viles y consolas.',
      color: 'hover:border-minecraft-grass/50'
    },
    {
      icon: PuzzleIcon,
      title: 'Mods & Plugins',
      desc: 'Acceso completo a Forge, NeoForge, Bukkit, Spigot, Paper, Purpur. Modpacks preconfigurados y datapacks.',
      color: 'hover:border-minecraft-stone/50'
    },
    {
      icon: ShieldIcon,
      title: 'Backups + DDoS',
      desc: 'Copias de seguridad autom\u00e1ticas, recuperaci\u00f3n ante problemas y protecci\u00f3n DDoS gratuita 24/7.',
      color: 'hover:border-minecraft-diamond/50'
    },
    {
      icon: PeopleIcon,
      title: 'Multiplayer Infinito',
      desc: 'Juega con amigos sin limitaciones de slots innecesarias. 2.4 GB RAM para hasta ~20 jugadores simult\u00e1neos.',
      color: 'hover:border-minecraft-grass/50'
    }
  ]

  return (
    <section ref={containerRef} className="bg-minecraft-dirt py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-pressstart text-minecraft-grass drop-shadow-lg mb-4">
            CARACTER\u00cdSTICAS
          </h2>
          <p className="font-vt323 text-lg text-minecraft-text/80 max-w-xl mx-auto">
            Todo lo que necesitas para jugar con tus amigos, sin pagar un centavo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                ref={el => { cardsRef.current[i] = el }}
                className={`minecraft-block p-6 md:p-8 transition-all duration-300 group cursor-pointer border-4 border-transparent ${feature.color}`}
                style={{ perspective: '1000px' }}
              >
                <div className="mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <Icon />
                </div>
                <h3 className="text-base md:text-lg font-pressstart mb-3 text-minecraft-diamond group-hover:text-minecraft-grass transition-colors">
                  {feature.title}
                </h3>
                <p className="font-vt323 text-minecraft-text/90 text-sm md:text-base leading-relaxed">
                  {feature.desc}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-minecraft-grass/0 group-hover:border-minecraft-grass/50 transition-colors" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
