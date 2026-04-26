// Minecraft-style SVG icons
export const CoinIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <circle cx="32" cy="32" r="28" fill="#FFD700" stroke="#8B6441" strokeWidth="2"/>
    <circle cx="32" cy="32" r="24" fill="#FFD700"/>
    <path d="M20 32 Q32 20 44 32 Q32 44 20 32" fill="#FFA500" opacity="0.5"/>
  </svg>
)

export const LightningIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <polygon points="32,8 48,32 36,32 48,56 16,28 28,28" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
  </svg>
)

export const GamepadIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <rect x="12" y="20" width="40" height="24" rx="4" fill="#8B6441" stroke="#5D9A3C" strokeWidth="2"/>
    <circle cx="22" cy="32" r="3" fill="#5D9A3C"/>
    <circle cx="28" cy="32" r="3" fill="#5D9A3C"/>
    <circle cx="42" cy="28" r="3" fill="#5D9A3C"/>
    <circle cx="42" cy="36" r="3" fill="#5D9A3C"/>
  </svg>
)

export const PuzzleIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <rect x="10" y="10" width="15" height="15" fill="#8D8D8D" stroke="#5D9A3C" strokeWidth="2"/>
    <rect x="28" y="10" width="15" height="15" fill="#8D8D8D" stroke="#5D9A3C" strokeWidth="2"/>
    <rect x="46" y="10" width="8" height="15" fill="#8D8D8D" stroke="#5D9A3C" strokeWidth="2"/>
    <rect x="10" y="28" width="15" height="15" fill="#8D8D8D" stroke="#5D9A3C" strokeWidth="2"/>
    <rect x="28" y="28" width="15" height="15" fill="#8D8D8D" stroke="#5D9A3C" strokeWidth="2"/>
    <rect x="46" y="28" width="8" height="15" fill="#8D8D8D" stroke="#5D9A3C" strokeWidth="2"/>
    <rect x="10" y="46" width="15" height="8" fill="#8D8D8D" stroke="#5D9A3C" strokeWidth="2"/>
    <rect x="28" y="46" width="15" height="8" fill="#8D8D8D" stroke="#5D9A3C" strokeWidth="2"/>
    <rect x="46" y="46" width="8" height="8" fill="#8D8D8D" stroke="#5D9A3C" strokeWidth="2"/>
  </svg>
)

export const ShieldIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <path d="M32,10 L48,18 L48,38 C48,50 32,58 32,58 C32,58 16,50 16,38 L16,18 Z" fill="#5D9A3C" stroke="#3FAC2E" strokeWidth="2"/>
    <text x="32" y="42" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#F0E6D3">✓</text>
  </svg>
)

export const PeopleIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <circle cx="20" cy="18" r="6" fill="#8B6441" stroke="#5D9A3C" strokeWidth="2"/>
    <path d="M14,28 Q14,24 20,24 Q26,24 26,28" fill="#8B6441" stroke="#5D9A3C" strokeWidth="2"/>
    <circle cx="44" cy="18" r="6" fill="#8B6441" stroke="#5D9A3C" strokeWidth="2"/>
    <path d="M38,28 Q38,24 44,24 Q50,24 50,28" fill="#8B6441" stroke="#5D9A3C" strokeWidth="2"/>
    <circle cx="32" cy="42" r="8" fill="#8B6441" stroke="#5D9A3C" strokeWidth="2"/>
    <path d="M20,48 Q20,42 32,42 Q44,42 44,48" fill="#8B6441" stroke="#5D9A3C" strokeWidth="2"/>
  </svg>
)
