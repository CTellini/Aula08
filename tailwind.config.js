/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Tellcon navy
        primary: {
          '50': '#EEF3F8',
          '400': '#1E4A76',
          '500': '#0B2948',
          '600': '#071D34',
          '900': '#041322',
        },
        // Tellcon orange
        secondary: {
          '400': '#FF7A3D',
          '500': '#FF5B16',
          '600': '#D9460B',
        },
        // Orange accents keep the brand mark prominent
        accent: {
          '400': '#FF8A52',
          '500': '#FF5B16',
          '600': '#D9460B',
        },
        // Deep navy surfaces
        dark: {
          '800': '#123A5C',
          '900': '#0B2948',
          '950': '#061A2E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in',
        'slide-up': 'slideUp 0.7s ease-out',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(11, 41, 72, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 91, 22, 0.5)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};