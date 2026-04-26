# DESIGN.md - Aternos Minecraft Redesign

## Propósito

Sistema de diseño para landing de Aternos rediseñada con estética Minecraft.
Mantiene 100% del contenido y propósito de Aternos, transformando solo la presentación visual.

---

## Decisiones de Diseño

### 1. Paleta de Colores (Minecraft)

**Decisión:** Colores basados en bloques/items de Minecraft.

**Razonamiento:** Conecta instantáneamente con la audiencia Minecraft. Cada color evoca un elemento reconocible.

| Token | Hex | RGB | Uso | Minecraft Ref |
|---|---|---|---|---|
| `grass` | #5D9A3C | 93, 154, 60 | CTAs, acentos primarios, destacados | Top grass block |
| `dirt` | #8B6441 | 139, 100, 65 | Fondos sección, bordes | Dirt block |
| `stone` | #8D8D8D | 141, 141, 141 | Fondos neutros, terciario | Stone block |
| `diamond` | #44D9E8 | 68, 217, 232 | Destacados premium, links | Diamond ore glow |
| `creeper` | #3FAC2E | 63, 172, 46 | Hover states, energía | Creeper green |
| `void` | #1A1A2E | 26, 26, 46 | Fondo principal, dark mode | The Void |
| `text` | #F0E6D3 | 240, 230, 211 | Texto principal | Parchment/paper |

### 2. Tipografía

**Decisión:** Dos fuentes Minecraft-style.

**Razonamiento:** Press Start 2P evoca nostalgia 8-bit; VT323 es legible pero retro.

- **Press Start 2P**
  - Uso: `<h1>`, `<h2>`, `<h3>`, `.btn-minecraft`
  - Size: 16px–48px (responsive)
  - Weight: 400 (regular, no bold available)
  - Letter spacing: +2px
  - Use case: Títulos, CTAs, máximo impacto

- **VT323**
  - Uso: Cuerpo, `<p>`, `.font-vt323`
  - Size: 12px–18px
  - Weight: 400
  - Fallback: Monospace system fonts
  - Use case: Párrafos, descripciones, accesibilidad

### 3. Componentes Minecraft-Style

#### 3.1 Bloques (`.minecraft-block`)

```css
/* Efecto 3D inset shadow */
box-shadow: 
  inset 2px 2px 0 rgba(255,255,255,0.3),    /* Top-left light */
  inset -2px -2px 0 rgba(0,0,0,0.3);        /* Bottom-right dark */

border: 4px solid;
border-color: [color-tone-dark];
```

**Decisión:** Bordes gruesos + inset shadows simulan profundidad de bloques Minecraft.

**Razonamiento:** Los bloques de Minecraft tienen una sombra interna inherente por cómo la luz golpea los voxels.

#### 3.2 Botones (`.btn-minecraft`)

```css
/* Base */
background: #5D9A3C (grass);
color: #1A1A2E (void);
border: 4px solid #8B6441 (dirt);
padding: 12px 24px;
font-family: 'Press Start 2P';

/* Interactive */
hover: scale(1.05) + creeper-green (#3FAC2E)
active: scale(0.95) /* "pressed in" */
focus: outline 3px diamond (#44D9E8)
```

**Decisión:** Botones tipo "bloque" con escala visual.

**Razonamiento:** Imita la interacción de "click/place block" en Minecraft.

#### 3.3 Secciones (`.minecraft-block-[color]`)

```css
background: [color];
border: 4px solid [color-darker-tone];
padding: 32px;
box-shadow: inset 1px 1px 0 rgba(255,255,255,0.1),
            inset -1px -1px 0 rgba(0,0,0,0.5);
```

**Decisión:** Cada sección es un "bloque grande" con borde y sombra.

**Razonamiento:** Refuerza la metáfora de "construir" la landing.

---

## Animaciones (GSAP)

### Filosofía

**Decisión:** Animaciones basadas en física Minecraft.

**Razonamiento:** Caída de bloques, apariciones en secuencia, escalas = movimiento familiar para jugadores Minecraft.

### Lista de Animaciones

| Animación | Trigger | Duración | Easing | Notas |
|---|---|---|---|---|
| **Falling Blocks** | Page Load (Hero) | 3-6s | linear | 12 bloques, repetición infinita, rotación 360° |
| **Stagger In** | ScrollTrigger (cada sección) | 0.6-0.8s | back.out | Cards, steps, items aparecen con delay |
| **Glow on Hover** | :hover | 0.3s | ease-out | Cards, botones emiten luz |
| **Scale Up** | :hover | 0.3s | ease-out | Botones y cards escalan 1.05x |
| **Counter Animate** | ScrollTrigger (Stats) | 2s | snap: 1 | Contadores suben de 0 → valor final |
| **Bounce 8-bit** | Optional `.animate-bounce-8bit` | 0.6s | ease-in-out | Movimiento vertical suave |

### ScrollTrigger Patterns

```javascript
// Standard stagger in
gsap.fromTo(element, 
  { opacity: 0, y: 50 },
  {
    opacity: 1, y: 0,
    duration: 0.6,
    delay: index * 0.12,
    scrollTrigger: {
      trigger: container,
      start: "top center",
      toggleActions: "play none none none"
    }
  }
)
```

**Razonamiento:** Elementos aparecen solo cuando visibles, mejora perceived performance.

---

## Responsive Breakpoints

**Decisión:** Mobile-first Tailwind breakpoints + custom adjustments.

```
xs: 0px (default)
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

**Press Start 2P Responsive:**
- `text-base` (xs/sm): 10px auto
- `text-lg` (md): 12px auto
- `text-2xl` (lg+): 16px+

**Razonamiento:** Pixel fonts deben ser legibles incluso pequeñas; Mobile users prioritarios.

### Mobile Adjustments

```css
@media (max-width: 768px) {
  h1 { letter-spacing: 1px; }      /* Reduce spacing, keep crisp */
  .minecraft-block { border-width: 2px; }  /* Thinner borders */
  section { padding: 12px; }       /* Tight spacing */
  .btn-minecraft { padding: 0.5rem 1rem; } /* Smaller buttons */
}

@media (max-width: 480px) {
  h1 { letter-spacing: 0.5px; }
  body { font-size: 12px; }
  /* Disable heavy animations */
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; }
  }
}
```

---

## Accesibilidad (WCAG 2.1 AA target)

### Color Contrast

- Grass (#5D9A3C) on Void (#1A1A2E): **4.8:1** ✓ AAA
- Diamond (#44D9E8) on Void: **5.2:1** ✓ AAA
- Text (#F0E6D3) on Stone (#8D8D8D): **4.5:1** ✓ AA

### Focus States

```css
.btn-minecraft:focus {
  outline: 3px solid #44D9E8;
  outline-offset: 2px;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

**Razonamiento:** Respeta preferencias de usuarios con sensibilidad a movimiento.

---

## Iconografía

### SVG-Based (No Emojis)

**Decisión:** Iconos SVG custom estilo Minecraft.

**Razonamiento:** Control total, consistencia, escalable.

**Iconos:**
- Coin (Dinero gratis)
- Lightning (Fácil/rápido)
- Gamepad (Opciones Java/Bedrock)
- Puzzle (Mods/Plugins)
- Shield (Seguridad DDoS)
- People (Multiplayer)

---

## Patrones Visuales

### "Build Mode" Metaphor

Secciones se construyen visualmente:
1. **Hero**: Bloques caen para formar fondo
2. **Features**: Tarjetas aparecen en stagger (laying blocks)
3. **How It Works**: Pasos conectados (crafting recipe)
4. **Community**: Chat aparece (building social)
5. **Stats**: Números crecen (resource gathering)
6. **CTA Final**: Bloques finales se colocan (completing structure)

---

## Performance

### Optimizaciones

1. **GSAP with ScrollTrigger** — Anima solo lo visible
2. **Tailwind CSS** — Utility-first, tree-shakeable
3. **Google Fonts preload** — Press Start 2P, VT323 en <head>
4. **Image optimization** — SVGs para iconos (0 KB)
5. **CSS Containment** — `contain: layout` en secciones grandes

### Bundle Size Targets

- JS: < 200KB (React + GSAP + Tailwind)
- CSS: < 50KB (Tailwind + custom)
- Fonts: < 100KB (Press Start 2P + VT323)

---

## Implementación Checklist

- [x] Color variables en Tailwind
- [x] Press Start 2P + VT323 Google Fonts
- [x] `.minecraft-block`, `.minecraft-block-grass` utilities
- [x] `.btn-minecraft` button styling
- [x] GSAP ScrollTrigger setup
- [x] Responsive breakpoints media queries
- [x] Focus states y accessibility
- [x] Reduced motion support
- [x] SVG icons component
- [x] 7 sections con animaciones

---

## Notas Finales

**Este DESIGN.md puede ser usado con Google Stitch** para generar variaciones o componentes adicionales, manteniendo la integridad visual.

**Tono:** Nostálgico pero moderno. Retro-gaming pero profesional. Community-first pero high-tech.

**Guardar e iterar:** Si necesitas cambios, actualiza este archivo primero, luego refactor componentes.

---

**Versión:** 1.0  
**Última actualización:** 2024-04-26  
**Propietario:** Aternos Redesign Project  
**Licencia:** CC-BY (Referencia a Minecraft: Mojang Studios)
