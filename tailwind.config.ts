import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#E9EAF4',
          DEFAULT: '#2B83BD',
          dark: '#323448',
        },
        purple: {
          DEFAULT: '#401E48',
        },
        yellow: {
          DEFAULT: '#E8CE49',
          light: '#f1e4a0',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
        gray: {
          DEFAULT: '#666666',
        },
        teal: {
          DEFAULT: '#006778',
          light: '#7CA8B0',
        },
        brands: {
          coldfusion: '#0B1743',
          javascript: '#EBD63F',
          css: '#2060AE',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
    },
  },
}
