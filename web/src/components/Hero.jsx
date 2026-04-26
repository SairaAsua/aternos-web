import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)

  // Particle canvas effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = ['#5D9A3C', '#8B6441', '#8D8D8D', '#44D9E8', '#3FAC2E', '#F0E6D3']
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 2,
      speedY: Math.random() * 0.8 + 0.2,
      speedX: (Math.random() - 0.5) * 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.1,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.y += p.speedY
        p.x += p.speedX
        p.rot += p.rotSpeed
        if (p.y > canvas.height + 10) {
          p.y = -10
          p.x = Math.random() * canvas.width
        }
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = p.color
        // Draw small square (block)
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
        // Inner highlight
        ctx.fillStyle = 'rgba(255,255,255,0.2)'
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size * 0.4, p.size * 0.4)
        ctx.restore()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // GSAP text animations
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(
      titleRef.current?.querySelectorAll('.line'),
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.15, ease: 'back.out(1.7)' }
    )
    .fromTo(
      subRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo(
      ctaRef.current?.querySelectorAll('.cta-item'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      '-=0.2'
    )
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-minecraft-void via-[#12122a] to-minecraft-stone"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-minecraft-void/80 via-transparent to-minecraft-void/40 pointer-events-none" style={{ zIndex: 2 }} />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div ref={titleRef}>
          <div className="line inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-minecraft-grass/20 border-2 border-minecraft-grass/40 rounded font-vt323 text-minecraft-grass text-sm md:text-base tracking-wider">
              <span className="w-2 h-2 bg-minecraft-grass rounded-full animate-pulse" />
              MILLONES DE SERVIDORES. CERO COSTO.
            </span>
          </div>

          <h1 className="line text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-pressstart mb-4 text-minecraft-grass drop-shadow-[0_4px_0_rgba(0,0,0,0.5)] leading-tight">
            SERVIDOR
            <br />
            <span className="text-minecraft-diamond">MINECRAFT</span>
          </h1>

          <h2 className="line text-xl sm:text-2xl md:text-4xl font-pressstart mb-8 text-minecraft-text drop-shadow-lg">
            <span className="text-minecraft-creeper">GRATIS</span>. PARA SIEMPRE.
          </h2>
        </div>

        <p ref={subRef} className="text-base md:text-lg font-vt323 mb-10 leading-relaxed max-w-2xl mx-auto text-minecraft-text/90">
          Aternos te proporciona tu propio servidor personal de Minecraft, donde puedes jugar con tus amigos todo el día y toda la noche. El servicio es gratuito y siempre será gratuito para todos en cualquier momento, sin posibilidad de pagar por nada.
        </p>

        <div ref={ctaRef} className="flex flex-col items-center gap-4">
          <a
            href="https://aternos.org/go/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-item btn-minecraft text-base md:text-lg px-8 md:px-10 py-4 md:py-5 hover:scale-105 transform transition-all active:scale-95 font-bold inline-flex items-center gap-3 shadow-xl hover:shadow-2xl"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            CREAR SERVIDOR GRATIS
          </a>

          <div className="cta-item flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 font-vt323 text-sm md:text-base text-minecraft-text/70">
            <span className="flex items-center gap-1">
              <span className="text-minecraft-grass">✓</span> Java + Bedrock
            </span>
            <span className="flex items-center gap-1">
              <span className="text-minecraft-grass">✓</span> Protección DDoS 24/7
            </span>
            <span className="flex items-center gap-1">
              <span className="text-minecraft-grass">✓</span> Mods & Plugins
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-vt323 text-xs text-minecraft-text/50 tracking-widest">SCROLL</span>
        <div className="w-6 h-10 border-2 border-minecraft-text/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-minecraft-grass rounded-full animate-ping" />
        </div>
      </div>
    </section>
  )
}
