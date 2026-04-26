import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HowItWorks() {
  const stepsRef = useRef([])

  useEffect(() => {
    stepsRef.current.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )
    })
  }, [])

  const steps = [
    {
      num: '1',
      title: 'Regístrate',
      desc: 'Crea tu cuenta en 30 segundos. Google o usuario directo.'
    },
    {
      num: '2',
      title: 'Elige Edición',
      desc: 'Java o Bedrock. Versión de Minecraft que prefieras.'
    },
    {
      num: '3',
      title: '¡A Jugar!',
      desc: 'Conecta con la IP que te damos. Invita a tus amigos.'
    }
  ]

  return (
    <section className="bg-minecraft-stone py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-pressstart text-center mb-16 text-minecraft-grass drop-shadow-lg">
          ¿CÓMO FUNCIONA?
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-stretch justify-between relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-minecraft-grass/30 z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              ref={el => stepsRef.current[i] = el}
              className="flex-1 minecraft-block-grass p-6 md:p-8 relative group z-10"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-minecraft-diamond rounded-full flex items-center justify-center text-minecraft-void text-2xl font-bold font-pressstart shadow-xl border-4 border-minecraft-dirt">
                {step.num}
              </div>

              <h3 className="text-xl md:text-2xl font-pressstart mt-8 mb-4 text-minecraft-void">
                {step.title}
              </h3>
              <p className="font-vt323 text-minecraft-void/80 text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center font-vt323 text-minecraft-text/70">
          <p>⏰ Tienes 6 minutos para conectarte cada vez que enciendes el servidor</p>
          <p className="text-sm mt-2">Así mantenemos todo gratis para todos 💚</p>
        </div>
      </div>
    </section>
  )
}
