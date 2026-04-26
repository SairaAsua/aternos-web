export default function Footer() {
  return (
    <footer className="bg-minecraft-void border-t-4 border-minecraft-grass py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-pressstart text-minecraft-grass mb-4 text-sm">Servidor</h3>
            <ul className="font-vt323 space-y-2 text-minecraft-text/70">
              <li><a href="#" className="hover:text-minecraft-grass">Crear Servidor</a></li>
              <li><a href="#" className="hover:text-minecraft-grass">Características</a></li>
              <li><a href="#" className="hover:text-minecraft-grass">Precios</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-pressstart text-minecraft-grass mb-4 text-sm">Comunidad</h3>
            <ul className="font-vt323 space-y-2 text-minecraft-text/70">
              <li><a href="#" className="hover:text-minecraft-grass">Foros</a></li>
              <li><a href="#" className="hover:text-minecraft-grass">Discord</a></li>
              <li><a href="#" className="hover:text-minecraft-grass">Tutoriales</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-pressstart text-minecraft-grass mb-4 text-sm">Soporte</h3>
            <ul className="font-vt323 space-y-2 text-minecraft-text/70">
              <li><a href="#" className="hover:text-minecraft-grass">Help Center</a></li>
              <li><a href="#" className="hover:text-minecraft-grass">Contacto</a></li>
              <li><a href="#" className="hover:text-minecraft-grass">Estado</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-pressstart text-minecraft-grass mb-4 text-sm">Legal</h3>
            <ul className="font-vt323 space-y-2 text-minecraft-text/70">
              <li><a href="#" className="hover:text-minecraft-grass">Términos</a></li>
              <li><a href="#" className="hover:text-minecraft-grass">Privacidad</a></li>
              <li><a href="#" className="hover:text-minecraft-grass">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-minecraft-grass/30 pt-8 text-center">
          <p className="font-vt323 text-minecraft-text/70 text-sm">
            © 2024 Aternos. Diseño Minecraft. Hecho con 💚
          </p>
          <p className="font-vt323 text-minecraft-text/50 text-xs mt-2">
            Minecraft es propiedad de Mojang Studios / Microsoft
          </p>
        </div>
      </div>
    </footer>
  )
}
