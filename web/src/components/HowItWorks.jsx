import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
    stepsRef.current.forEach((step, index) => {
      if (!step) return
      gsap.fromTo(
        step,
        { opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 30 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none none'
          }
        }
      )
    })
  }, [])

  const steps = [
    {
      num: '1',
      title: 'Reg\u00edstrate',
      desc: 'Crea tu cuenta en Aternos.org en 30 segundos. Continua con Google o crea un usuario directo.',
      icon: '📝'
    },
    {
      num: '2',
      title: 'Configura',
      desc: 'Elige edici\u00f3n (Java o Bedrock), versi\u00f3n de Minecraft, nombre del servidor. Agrega mods si quieres.',
      icon: '⚙\ufe0f'
    },
    {
      num: '3',
      title: '\u00a1A Jugar!',
      desc: 'Aternos te da una direcci\u00f3n IP. Entra desde Minecraft y pasa la IP a tus amigos. \u00a1Listo!',
      icon: '🎮'
    }
  ]

  return (
    <section ref={sectionRef} className="bg-minecraft-stone py-24 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-pressstart text-minecraft-grass drop-shadow-lg mb-4">
            \u00bfC\u00d3MO FUNCIONA?
          </h2>
          <p className="font-vt323 text-lg text-minecraft-text/80">
            De la idea al juego en tres pasos simples.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-stretch justify-between relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-minecraft-grass/20 via-minecraft-grass/50 to-minecraft-grass/20 z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              ref={el => { stepsRef.current[i] = el }}
              className="flex-1 minecraft-block-grass p-6 md:p-8 relative group z-10 hover:shadow-[0_0_25px_rgba(93,154,60,0.25)] transition-shadow duration-300"
            >
              {/* Step number badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-minecraft-diamond border-4 border-minecraft-dirt flex items-center justify-center shadow-xl">
                <span className="text-minecraft-void text-xl font-bold font-pressstart">{step.num}</span>
              </div>

              <div className="mt-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                <h3 className="text-lg md:text-xl font-pressstart mb-3 text-minecraft-void">
                  {step.title}
                </h3>
                <p className="font-vt323 text-minecraft-void/80 text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-block minecraft-block bg-minecraft-darkstone/50 px-6 py-4">
            <p className="font-vt323 text-minecraft-text/80 text-sm md:text-base">
              <span className="text-minecraft-diamond">⏰</span> Tienes 6 minutos para conectarte cada vez que enciendes el servidor
            </p>
            <p className="font-vt323 text-minecraft-text/50 text-xs mt-1">
              As\u00ed mantenemos todo gratis para todos 💚
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
