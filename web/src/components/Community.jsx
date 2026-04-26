import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Community() {
  const sectionRef = useRef(null)
  const messagesRef = useRef([])

  useEffect(() => {
    messagesRef.current.forEach((msg, index) => {
      if (!msg) return
      gsap.fromTo(
        msg,
        { opacity: 0, x: index % 2 === 0 ? -40 : 40, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.18,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      )
    })
  }, [])

  const messages = [
    { player: 'BuilderMax', msg: 'Acabo de hacer un castillo épico 😍', side: 'left', color: 'bg-minecraft-grass' },
    { player: 'SurvivalKing', msg: 'Sin pagar un peso! Increíble', side: 'right', color: 'bg-minecraft-diamond' },
    { player: 'CreeperSlayer', msg: 'Los mods funcionan perfectamente', side: 'left', color: 'bg-minecraft-grass' },
    { player: 'PixelArtist', msg: 'Mejor que otras opciones pagas', side: 'right', color: 'bg-minecraft-diamond' },
    { player: 'AdminJefe', msg: 'La comunidad es lo mejor aquí', side: 'left', color: 'bg-minecraft-grass' },
  ]

  return (
    <section ref={sectionRef} className="bg-minecraft-void py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-pressstart text-minecraft-grass drop-shadow-lg mb-4">
            LA COMUNIDAD
          </h2>
          <p className="font-vt323 text-lg text-minecraft-text/80">
            Millones de jugadores construyendo juntos 💚
          </p>
        </div>

        <div className="minecraft-block bg-minecraft-darkstone p-4 md:p-6 space-y-4 max-h-[32rem] overflow-y-auto scrollbar-thin">
          {messages.map((msg, i) => (
            <div
              key={i}
              ref={el => { messagesRef.current[i] = el }}
              className={`flex ${msg.side === 'left' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`flex gap-3 max-w-[80%] ${msg.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Avatar */}
                <div className="flex-shrink-0 w-10 h-10 bg-minecraft-dirt border-2 border-minecraft-darkstone flex items-center justify-center font-pressstart text-xs text-minecraft-text">
                  {msg.player[0]}
                </div>
                {/* Bubble */}
                <div
                  className={`px-4 py-3 rounded font-vt323 text-sm md:text-base ${msg.color} text-minecraft-void shadow-md`}
                >
                  <div className="font-bold text-xs mb-1 opacity-70">{msg.player}</div>
                  <div>{msg.msg}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          <div className="flex justify-start">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-minecraft-dirt border-2 border-minecraft-darkstone flex items-center justify-center font-pressstart text-xs text-minecraft-text">
                ?
              </div>
              <div className="px-4 py-3 bg-minecraft-stone/50 text-minecraft-text/70 font-vt323 text-sm flex items-center gap-1">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://board.aternos.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-vt323 text-minecraft-diamond hover:text-minecraft-grass transition-colors text-lg"
          >
            <span>Únete a los foros</span>
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
