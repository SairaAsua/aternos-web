import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function VideoShowcase() {
  const sectionRef = useRef(null)
  const frameRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      frameRef.current,
      { opacity: 0, scale: 0.85, y: 60 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo(
      textRef.current?.querySelectorAll('.reveal'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-minecraft-dirt via-minecraft-stone to-minecraft-void overflow-hidden">
      {/* Floating pixel particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-minecraft-grass/40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div ref={textRef} className="text-center mb-12">
          <h2 className="reveal text-3xl md:text-4xl font-pressstart text-minecraft-grass drop-shadow-lg mb-4">
            TU MUNDO, TU REGLAS
          </h2>
          <p className="reveal font-vt323 text-lg md:text-xl text-minecraft-text/90 max-w-2xl mx-auto leading-relaxed">
            Explora lo que millones de jugadores ya disfrutan. Servidores gratuitos que funcionan.
          </p>
        </div>

        <div
          ref={frameRef}
          className="relative mx-auto max-w-5xl"
        >
          {/* Minecraft-style TV frame */}
          <div className="minecraft-block border-8 border-minecraft-darkstone p-3 md:p-4 bg-minecraft-void shadow-2xl">
            {/* Screen bezel */}
            <div className="relative aspect-video bg-black border-4 border-minecraft-dirt overflow-hidden group">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/MmB9b5njVbA?si=1&autoplay=0&mute=1&loop=1&playlist=MmB9b5njVbA&controls=1"
                title="Minecraft Servers Showcase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              {/* Scanlines overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
            </div>

            {/* TV controls decoration */}
            <div className="flex items-center justify-between mt-3 px-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="font-vt323 text-xs text-minecraft-text/50 tracking-widest">
                ● ATERNOS TV ●
              </div>
              <div className="flex gap-1">
                <div className="w-6 h-3 bg-minecraft-dirt border border-minecraft-darkstone" />
                <div className="w-6 h-3 bg-minecraft-dirt border border-minecraft-darkstone" />
              </div>
            </div>
          </div>

          {/* Decorative blocks around TV */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-minecraft-grass border-4 border-minecraft-dirt shadow-lg hidden md:block animate-bounce-8bit" style={{ animationDelay: '0.2s' }} />
          <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-minecraft-diamond border-4 border-minecraft-dirt shadow-lg hidden md:block animate-bounce-8bit" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/2 -right-8 w-8 h-8 bg-minecraft-dirt border-4 border-minecraft-darkstone shadow-lg hidden lg:block animate-bounce-8bit" style={{ animationDelay: '0.8s' }} />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { num: '0€', label: 'Coste mensual' },
            { num: '24/7', label: 'Protección activa' },
            { num: '∞', label: 'Posibilidades' }
          ].map((item, i) => (
            <div key={i} className="minecraft-block p-6 hover:bg-minecraft-grass/10 transition-colors duration-300">
              <div className="text-3xl md:text-4xl font-pressstart text-minecraft-diamond mb-2">{item.num}</div>
              <div className="font-vt323 text-minecraft-text/80">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
