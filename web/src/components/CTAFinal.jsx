import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTAFinal() {
  const blocksRef = useRef([])
  const textRef = useRef(null)

  useEffect(() => {
    // Animate text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Animate building blocks
    blocksRef.current.forEach((block, index) => {
      gsap.fromTo(
        block,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: block,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      )
    })
  }, [])

  return (
    <section className="bg-gradient-to-b from-minecraft-stone to-minecraft-void py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div ref={textRef}>
          <h2 className="text-4xl md:text-5xl font-pressstart mb-6 text-minecraft-grass drop-shadow-lg">
            ¿LISTO PARA TU
          </h2>
          <h2 className="text-4xl md:text-5xl font-pressstart mb-12 text-minecraft-diamond drop-shadow-lg">
            AVENTURA?
          </h2>

          <p className="font-vt323 text-lg mb-12 text-minecraft-text/90">
            Crea tu primer servidor ahora. Cero tarjeta de crédito. Cero spam.
            Solo diversión.
          </p>

          <button className="btn-minecraft text-2xl px-12 py-6 hover:scale-110 transform transition-all shadow-2xl">
            ⚒️ COMENZAR AHORA
          </button>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                ref={el => blocksRef.current[i] = el}
                className="minecraft-block h-32 flex items-center justify-center text-5xl opacity-0"
              >
                {['⛏️', '💚', '🎮'][i]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
