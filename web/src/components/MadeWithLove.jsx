import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MadeWithLove() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      contentRef.current?.querySelectorAll('.reveal'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-minecraft-void to-[#0d0d1a] overflow-hidden"
    >
      {/* Subtle stars / particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div ref={contentRef} className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Decorative separator */}
        <div className="reveal flex items-center justify-center gap-4 mb-10">
          <div className="h-1 w-16 bg-minecraft-grass/50" />
          <div className="w-4 h-4 bg-minecraft-diamond rotate-45 border-2 border-minecraft-dirt" />
          <div className="h-1 w-16 bg-minecraft-grass/50" />
        </div>

        <h2 className="reveal text-2xl md:text-3xl font-pressstart text-minecraft-grass drop-shadow-lg mb-6 leading-relaxed">
          HECHO CON AMOR
        </h2>

        <p className="reveal font-vt323 text-lg md:text-xl text-minecraft-text/90 leading-relaxed max-w-2xl mx-auto mb-8">
          Esta página es un regalo de la comunidad Minecraft para <span className="text-minecraft-diamond font-bold">Aternos</span>.
          Porque creemos que los servidores gratuitos cambian vidas y unen amigos.
        </p>

        <div className="reveal minecraft-block bg-minecraft-darkstone/50 p-6 md:p-8 max-w-xl mx-auto mb-10">
          <p className="font-vt323 text-minecraft-text/80 text-base md:text-lg leading-relaxed italic">
            “Un servidor de Minecraft no es solo bloques y mods.
            Es el lugar donde un niño aprende a liderar, donde amigos se reúnen a construir,
            donde la creatividad no tiene límites.”
          </p>
        </div>

        <div className="reveal flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <a
            href="https://daemoncraft.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 minecraft-block bg-minecraft-void/60 px-6 py-4 hover:bg-minecraft-grass/20 transition-all duration-300"
          >
            <div className="w-10 h-10 bg-minecraft-grass border-2 border-minecraft-dirt flex items-center justify-center text-minecraft-void font-bold font-pressstart text-xs">
              DC
            </div>
            <div className="text-left">
              <div className="font-pressstart text-xs text-minecraft-diamond group-hover:text-minecraft-grass transition-colors">
                DaemonCraft
              </div>
              <div className="font-vt323 text-sm text-minecraft-text/70">
                Un daemon vive en tu servidor
              </div>
            </div>
          </a>

          <a
            href="https://altermundi.net"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 minecraft-block bg-minecraft-void/60 px-6 py-4 hover:bg-minecraft-diamond/20 transition-all duration-300"
          >
            <div className="w-10 h-10 bg-minecraft-diamond border-2 border-minecraft-dirt flex items-center justify-center text-minecraft-void font-bold font-pressstart text-xs">
              AM
            </div>
            <div className="text-left">
              <div className="font-pressstart text-xs text-minecraft-diamond group-hover:text-minecraft-grass transition-colors">
                AlterMundi
              </div>
              <div className="font-vt323 text-sm text-minecraft-text/70">
                Soberanía tecnológica desde 2012
              </div>
            </div>
          </a>
        </div>

        <p className="reveal font-vt323 text-sm text-minecraft-text/50">
          ¿Te interesa colaborar? Escríbenos a{' '}
          <a href="mailto:nicoechaniz@daemoncraft.ai" className="text-minecraft-diamond hover:text-minecraft-grass underline underline-offset-2 transition-colors">
            nicoechaniz@daemoncraft.ai
          </a>
        </p>

        {/* Bottom decorative blocks */}
        <div className="reveal flex justify-center gap-2 mt-12">
          {['grass', 'dirt', 'stone', 'diamond', 'stone', 'dirt', 'grass'].map((type, i) => (
            <div
              key={i}
              className={`w-6 h-6 md:w-8 md:h-8 border-2 border-minecraft-darkstone shadow-sm animate-bounce-8bit ${
                type === 'grass'
                  ? 'bg-minecraft-grass'
                  : type === 'dirt'
                  ? 'bg-minecraft-dirt'
                  : type === 'stone'
                  ? 'bg-minecraft-stone'
                  : 'bg-minecraft-diamond'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
