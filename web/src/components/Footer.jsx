export default function Footer() {
  return (
    <footer className="bg-minecraft-void border-t-4 border-minecraft-grass pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-pressstart text-minecraft-grass mb-4 text-xs tracking-wider">SERVIDOR</h3>
            <ul className="font-vt323 space-y-3 text-minecraft-text/70">
              <li><a href="https://aternos.org/go/" target="_blank" rel="noopener noreferrer" className="hover:text-minecraft-grass transition-colors">Crear Servidor</a></li>
              <li><a href="https://aternos.org/software/" target="_blank" rel="noopener noreferrer" className="hover:text-minecraft-grass transition-colors">Software</a></li>
              <li><a href="https://aternos.org/addons/" target="_blank" rel="noopener noreferrer" className="hover:text-minecraft-grass transition-colors">Mods & Plugins</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-pressstart text-minecraft-grass mb-4 text-xs tracking-wider">COMUNIDAD</h3>
            <ul className="font-vt323 space-y-3 text-minecraft-text/70">
              <li><a href="https://board.aternos.org/" target="_blank" rel="noopener noreferrer" className="hover:text-minecraft-grass transition-colors">Foros</a></li>
              <li><a href="https://discord.gg/aternos" target="_blank" rel="noopener noreferrer" className="hover:text-minecraft-grass transition-colors">Discord</a></li>
              <li><a href="https://www.youtube.com/c/Aternos" target="_blank" rel="noopener noreferrer" className="hover:text-minecraft-grass transition-colors">YouTube</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-pressstart text-minecraft-grass mb-4 text-xs tracking-wider">SOPORTE</h3>
            <ul className="font-vt323 space-y-3 text-minecraft-text/70">
              <li><a href="https://support.aternos.org/hc/en-us" target="_blank" rel="noopener noreferrer" className="hover:text-minecraft-grass transition-colors">Help Center</a></li>
              <li><a href="https://status.aternos.org/" target="_blank" rel="noopener noreferrer" className="hover:text-minecraft-grass transition-colors">Estado</a></li>
              <li><a href="mailto:support@aternos.org" className="hover:text-minecraft-grass transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-pressstart text-minecraft-diamond mb-4 text-xs tracking-wider">ESTE REGALO</h3>
            <ul className="font-vt323 space-y-3 text-minecraft-text/70">
              <li><a href="https://daemoncraft.ai" target="_blank" rel="noopener noreferrer" className="hover:text-minecraft-diamond transition-colors">DaemonCraft</a></li>
              <li><a href="https://altermundi.net" target="_blank" rel="noopener noreferrer" className="hover:text-minecraft-diamond transition-colors">AlterMundi</a></li>
              <li>
                <a href="mailto:nicoechaniz@daemoncraft.ai" className="hover:text-minecraft-diamond transition-colors">
                  Contactar equipo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-minecraft-grass/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-vt323 text-minecraft-text/60 text-sm">
              Contenido de <span className="text-minecraft-grass">Aternos</span> respetado fielmente.
            </p>
            <p className="font-vt323 text-minecraft-text/40 text-xs mt-1">
              Dise\u00f1o comunitario hecho con \u2764\ufe0f por <a href="https://altermundi.net" target="_blank" rel="noopener noreferrer" className="hover:text-minecraft-diamond transition-colors">AlterMundi</a>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-minecraft-grass border-2 border-minecraft-dirt flex items-center justify-center">
              <span className="font-pressstart text-[8px] text-minecraft-void">A</span>
            </div>
            <span className="font-vt323 text-minecraft-text/50 text-sm">
              Minecraft\u2122 es marca de Mojang Studios / Microsoft
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
