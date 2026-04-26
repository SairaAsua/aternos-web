import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const [value, setValue] = useState(0)
  const elRef = useRef(null)

  useEffect(() => {
    const obj = { val: 0 }
    gsap.to(obj, {
      val: target,
      duration: 2.2,
      ease: 'power2.out',
      snap: { val: target > 100 ? 1000 : 1 },
      scrollTrigger: {
        trigger: elRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      onUpdate: () => setValue(Math.floor(obj.val))
    })
  }, [target])

  const format = (n) => {
    if (n >= 1000000) return (n / 1000000).toFixed(0) + 'M+'
    if (n >= 1000) return (n / 1000).toFixed(0) + 'K+'
    return n.toString()
  }

  return (
    <span ref={elRef}>
      {prefix}{format(value)}{suffix}
    </span>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current?.querySelectorAll('.stat-card'),
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, [])

  const stats = [
    { label: 'Servidores Creados', value: 10000000, emoji: '⮏️', suffix: '' },
    { label: 'Jugadores Activos', value: 5000000, emoji: '🎮', suffix: '' },
    { label: 'Años Online', value: 10, emoji: '📅', suffix: '+' },
    { label: 'Países', value: 195, emoji: '🌍', suffix: '' }
  ]

  return (
    <section ref={sectionRef} className="bg-minecraft-dirt py-24 relative overflow-hidden">
      {/* Background decorative blocks */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 bg-minecraft-grass border-2 border-minecraft-darkstone"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              transform: `rotate(${i * 15}deg)`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-pressstart text-center mb-16 text-minecraft-grass drop-shadow-lg">
          POR LOS NÚMEROS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card minecraft-block-grass p-8 text-center group hover:scale-105 hover:shadow-[0_0_30px_rgba(93,154,60,0.3)] transition-all duration-300 cursor-default"
            >
              <div className="text-4xl md:text-5xl mb-4 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                {stat.emoji}
              </div>
              <div className="text-2xl md:text-3xl font-bold font-pressstart text-minecraft-void mb-3">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-vt323 text-minecraft-void/80 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
