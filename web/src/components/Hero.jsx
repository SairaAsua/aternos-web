import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)
  const blocksRef = useRef([])
  const titleRef = useRef(null)

  useEffect(() => {
    // Animated falling blocks effect with rotation
    const createFallingBlock = () => {
      const block = document.createElement('div')
      const size = Math.random() * 50 + 25
      const delay = Math.random() * 3
      const colors = ['bg-minecraft-grass', 'bg-minecraft-dirt', 'bg-minecraft-stone', 'bg-minecraft-diamond']
      const randomColor = colors[Math.floor(Math.random() * colors.length)]

      block.className = `absolute minecraft-block rounded-sm ${randomColor}`
      block.style.width = size + 'px'
      block.style.height = size + 'px'
      block.style.left = Math.random() * 100 + '%'
      block.style.opacity = '0.2'

      containerRef.current?.appendChild(block)
      blocksRef.current.push(block)

      gsap.to(block, {
        y: window.innerHeight + 100,
        rotation: 360 * (Math.random() > 0.5 ? 1 : -1),
        duration: 4 + Math.random() * 3,
        delay,
        repeat: -1,
        ease: 'linear'
      })
    }

    // Create initial falling blocks
    for (let i = 0; i < 12; i++) {
      createFallingBlock()
    }

    // Animate title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current.querySelectorAll('h1, h2'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.3 }
      )
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-minecraft-void to-minecraft-stone"
    >
      <div className="absolute inset-0 pointer-events-none" />

      <div ref={titleRef} className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-pressstart mb-4 text-minecraft-grass drop-shadow-lg animate-pulse">
          ⚒️ SERVIDOR MINECRAFT ⚒️
        </h1>
        <h2 className="text-2xl md:text-4xl font-pressstart mb-8 text-minecraft-diamond drop-shadow-lg">
          💚 GRATIS. PARA SIEMPRE. 💚
        </h2>

        <p className="text-lg md:text-xl font-vt323 mb-12 leading-relaxed max-w-2xl mx-auto">
          Tu propio servidor personal. Cero pagos. Cero limitaciones.
          Juega con tus amigos sin preocupaciones.
        </p>

        <button className="btn-minecraft text-base md:text-lg px-6 md:px-8 py-3 md:py-4 mb-6 hover:scale-105 transform transition-all active:scale-95 font-bold">
          ⚒️ CREAR SERVIDOR GRATIS ⚒️
        </button>

        <div className="mt-12 text-minecraft-text/70 font-vt323 text-sm">
          <p>✓ Java + Bedrock Edition</p>
          <p>✓ Protección DDoS 24/7</p>
          <p>✓ Mods & Plugins incluidos</p>
        </div>
      </div>
    </section>
  )
}
