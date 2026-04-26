/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        minecraft: {
          grass: '#5D9A3C',
          dirt: '#8B6441',
          stone: '#8D8D8D',
          diamond: '#44D9E8',
          creeper: '#3FAC2E',
          void: '#1A1A2E',
          text: '#F0E6D3',
          darkstone: '#454545',
        }
      },
      fontFamily: {
        pressstart: ['Press Start 2P', 'cursive'],
        vt323: ['VT323', 'monospace'],
      },
      animation: {
        'falling-block': 'fallblock 0.8s ease-in-out',
        'pulse-glow': 'pulseglow 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-8bit': 'bounce8bit 0.6s ease-in-out infinite',
        'shake': 'shake 0.3s ease-in-out',
      },
      keyframes: {
        fallblock: {
          '0%': { transform: 'translateY(-100vh) rotateZ(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(0) rotateZ(0deg)', opacity: '1' },
        },
        pulseglow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(93, 154, 60, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(93, 154, 60, 0.8)' },
        },
        bounce8bit: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
        }
      },
    },
  },
  plugins: [],
}
