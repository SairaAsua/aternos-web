# Aternos Redesign - Minecraft Aesthetic Landing

Rediseño de Aternos (hosting gratuito de servidores Minecraft) con estética Minecraft pura.
Contenido de Aternos íntegro, presentación 100% Minecraft pixel-art.

## 🎮 Stack

- **React 18** + **Vite** (dev server rápido)
- **Tailwind CSS** con config Minecraft custom
- **GSAP 3** para animaciones (ScrollTrigger, tweens, falling blocks)
- **Google Fonts**: Press Start 2P (títulos) + VT323 (cuerpo)

## 📁 Estructura

```
web/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              → Bloque cayendo, CTA principal
│   │   ├── Features.jsx          → Grid 3x2 de características
│   │   ├── HowItWorks.jsx        → 3 pasos (Crafting)
│   │   ├── Community.jsx         → Chat Minecraft simulado
│   │   ├── Stats.jsx             → Contadores animados
│   │   ├── CTAFinal.jsx          → Bloque final con CTA
│   │   └── Footer.jsx            → Links + créditos
│   ├── App.jsx                   → Orquestador de secciones
│   ├── main.jsx                  → Entry point
│   └── index.css                 → Tailwind + custom pixel CSS
├── index.html                    → Template base
├── package.json
├── vite.config.js
├── tailwind.config.js            → Colores Minecraft, animaciones
└── postcss.config.js
```

## 🎨 Paleta Minecraft

| Token | Color | Uso |
|---|---|---|
| `grass` | #5D9A3C | CTAs, acentos |
| `dirt` | #8B6441 | Fondos sección |
| `stone` | #8D8D8D | Neutro |
| `diamond` | #44D9E8 | Destacados |
| `creeper` | #3FAC2E | Hover (verde brillante) |
| `void` | #1A1A2E | Fondo oscuro principal |
| `text` | #F0E6D3 | Texto |

## ⚙️ Desarrollo

```bash
cd web
npm install
npm run dev       # → http://localhost:5173/
npm run build     # → dist/
```

## 🎬 Animaciones GSAP Implementadas

### Hero
- Bloques cayendo infinitamente (falling-block animation)
- ScrollTrigger para fade-in al entrar

### Features
- Cards aparecen en stagger (0.1s delay entre cada una)
- Hover: escala + glow

### How It Works
- Pasos 1-3 aparecen en secuencia (0.15s delay)
- Números circulares con efecto diamond

### Community
- Mensajes de chat aparecen uno a uno (0.2s delay)
- Alternancia left/right para efecto chat real

### Stats
- Contadores animados (0 → valor final en 2s)
- Emojis rotan en hover

### CTA Final
- Bloques se "construyen" con scale + opacity
- Text fade-in

## 📊 Contenido (Markdown)

Ver `/home/saira/aternos-redesign/02-aternos-content.md` para:
- Taglines y descripciones
- 6 Features principales
- 3 Pasos How It Works
- Community messaging
- Limitaciones honestas
- Stats estimadas

## 🔗 Contenido Extraído

```
/home/saira/aternos-redesign/
├── 01-stitch-design-md.md          ← Teoría de Google Stitch
├── 02-aternos-content.md           ← Todo el contenido de Aternos
├── 03-design-system.md             ← (próximo: DESIGN.md formal)
└── web/                            ← Proyecto React (aquí)
```

## 🚀 Próximos Pasos

- [ ] Completar responsive design (mobile-first refinement)
- [ ] Agregar favicon Minecraft
- [ ] Optimizar imágenes/assets
- [ ] Audit de accessibility (WCAG)
- [ ] Deploy (Vercel, Netlify)

## 🎯 Características Clave

✅ **Respeta contenido de Aternos 100%** — Solo rediseño visual
✅ **Pixel-perfect Minecraft aesthetic** — Fuentes, colores, animaciones
✅ **Animaciones suaves con GSAP** — ScrollTrigger, tweens, stagger
✅ **Performance-first** — React + Vite + Tailwind CSS
✅ **Responsive** — Mobile-first Tailwind

## 📝 Licencia & Créditos

- Diseño Minecraft inspirado en: Minecraft (Mojang Studios)
- Contenido de Aternos respetado y referenciado
- Realizado con ❤️ por [Tu Nombre]

---

**Status**: 🔴 En construcción (Hero + Features listas, fine-tuning de animaciones en progreso)
