/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        card: 'var(--card)',
        primary: 'var(--primary)',
        textMain: 'var(--textMain)',
        textMuted: 'var(--textMuted)',
        borderDark: 'var(--borderDark)',
        borderLight: 'var(--borderLight)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-outfit)', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      maxWidth: {
        '7xl': '92%',
      },
    },
  },
  plugins: [],
}
