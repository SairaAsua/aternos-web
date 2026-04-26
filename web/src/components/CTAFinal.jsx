import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTAFinal() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const blocksRef = useRef([])

  useEffect(() => {
    gsap.fromTo(
      textRef.current?.querySelectorAll('.reveal'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    )

    blocksRef.current.forEach((block, index) => {
      if (!block) return
      gsap.fromTo(
        block,
        { opacity: 0, scale: 0, rotation: -45 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          delay: 0.4 + index * 0.12,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none'
          }
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-minecraft-stone to-minecraft-void py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-minecraft-diamond/20 border border-minecraft-diamond/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `bounce8bit ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div ref={textRef}>
          <h2 className="reveal text-3xl md:text-5xl font-pressstart mb-4 text-minecraft-grass drop-shadow-lg">
            \u00bfLISTO PARA TU
          </h2>
          <h2 className="reveal text-3xl md:text-5xl font-pressstart mb-8 text-minecraft-diamond drop-shadow-lg">
            AVENTURA?
          </h2>

          <p className="reveal font-vt323 text-lg md:text-xl mb-12 text-minecraft-text/90 max-w-xl mx-auto leading-relaxed">
            Crea tu primer servidor ahora. Cero tarjeta de cr\u00e9dito. Cero spam.
            Solo diversi\u00f3n con tus amigos.
          </p>

          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://aternos.org/go/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-minecraft text-xl md:text-2xl px-10 md:px-14 py-5 md:py-6 hover:scale-110 transform transition-all shadow-2xl inline-flex items-center gap-3"
            >
              <span className="text-2xl">⛏️</span>
              COMENZAR AHORA
            </a>
            <a
              href="https://support.aternos.org/hc/en-us"
              target="_blank"
              rel="noopener noreferrer"
              className="font-vt323 text-minecraft-text/70 hover:text-minecraft-diamond transition-colors text-lg underline underline-offset-4"
            >
              Ver tutorial
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-lg mx-auto">
          {[
            { icon: '⮏️', label: 'Minar' },
            { icon: '💚', label: 'Construir' },
            { icon: '🎮', label: 'Jugar' }
          ].map((item, i) => (
            <div
              key={i}
              ref={el => { blocksRef.current[i] = el }}
              className="minecraft-block h-28 md:h-36 flex flex-col items-center justify-center gap-2 hover:bg-minecraft-grass/10 transition-colors duration-300 group"
            >
              <span className="text-4xl md:text-5xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
              <span className="font-vt323 text-minecraft-text/60 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
