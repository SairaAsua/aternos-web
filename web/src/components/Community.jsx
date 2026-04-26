import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Community() {
  const messagesRef = useRef([])

  useEffect(() => {
    messagesRef.current.forEach((msg, index) => {
      gsap.fromTo(
        msg,
        { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: msg,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })
  }, [])

  const messages = [
    { player: 'BuilderMax', msg: 'Acabo de hacer un castillo épico 😍', side: 'left' },
    { player: 'SurvivalKing', msg: 'Sin pagar un peso! Increíble', side: 'right' },
    { player: 'CreeperSlayer', msg: 'Los mods funcionan perfectamente', side: 'left' },
    { player: 'PixelArtist', msg: 'Mejor que otras opciones pagas', side: 'right' },
    { player: 'AdminJefe', msg: 'La comunidad es lo mejor aquí', side: 'left' },
  ]

  return (
    <section className="bg-minecraft-void py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-pressstart text-center mb-16 text-minecraft-grass drop-shadow-lg">
          LA COMUNIDAD
        </h2>

        <div className="minecraft-block bg-minecraft-darkstone p-6 space-y-4 max-h-96 overflow-hidden">
          {messages.map((msg, i) => (
            <div
              key={i}
              ref={el => messagesRef.current[i] = el}
              className={`flex ${msg.side === 'left' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg font-vt323 text-sm ${
                  msg.side === 'left'
                    ? 'bg-minecraft-grass text-minecraft-void'
                    : 'bg-minecraft-diamond text-minecraft-void'
                }`}
              >
                <div className="font-bold text-xs mb-1">{msg.player}</div>
                <div>{msg.msg}</div>
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-minecraft-grass/30">
            <p className="text-center font-vt323 text-minecraft-text/70 text-sm">
              Millones de jugadores construyendo juntos 💚
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
