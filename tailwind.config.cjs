/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0B0F19',       // Deep space dark slate
          darker: '#060810',     // Even darker background
          blue: '#00F0FF',       // High-tech neon cyan
          gold: '#D4AF37',       // Luxury gold color
          rose: '#FF2E93',       // Cherry blossom vibrant pink
          gray: '#8C9FC2',       // Sleek tech gray
        }
      },
      fontFamily: {
        outfit: ['"Outfit"', 'sans-serif'],
        exo: ['"Exo 2"', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s infinite alternate',
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 5px rgba(0, 240, 255, 0.2), 0 0 10px rgba(0, 240, 255, 0.1)' },
          '100%': { boxShadow: '0 0 15px rgba(0, 240, 255, 0.6), 0 0 25px rgba(0, 240, 255, 0.3)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
