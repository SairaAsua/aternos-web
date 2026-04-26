import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Stats() {
  const statsRef = useRef([])

  useEffect(() => {
    statsRef.current.forEach((stat) => {
      const target = stat.querySelector('[data-target]')
      if (target) {
        const finalValue = parseInt(target.dataset.target)

        gsap.fromTo(
          { value: 0 },
          {
            value: finalValue,
            duration: 2,
            snap: { value: 1 },
            onUpdate: function() {
              target.textContent = Math.floor(this.targets()[0].value)
            },
            scrollTrigger: {
              trigger: stat,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        )
      }
    })
  }, [])

  const stats = [
    { label: 'Servidores Creados', value: 10000000, emoji: '⛏️' },
    { label: 'Jugadores Activos', value: 5000000, emoji: '🎮' },
    { label: 'Años de Funcionamiento', value: 10, emoji: '📅' },
    { label: 'Países', value: 195, emoji: '🌍' }
  ]

  return (
    <section className="bg-minecraft-dirt py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-pressstart text-center mb-16 text-minecraft-grass drop-shadow-lg">
          POR LOS NÚMEROS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={el => statsRef.current[i] = el}
              className="minecraft-block-grass p-8 text-center group hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4 group-hover:rotate-12 transition-transform">
                {stat.emoji}
              </div>
              <div
                data-target={stat.value}
                className="text-3xl font-bold font-pressstart text-minecraft-void mb-3"
              >
                0
              </div>
              <p className="font-vt323 text-minecraft-void/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
