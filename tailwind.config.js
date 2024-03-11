/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        naslov: ['TeXGyreAdventor', 'sans-serif'],
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        smedja: '#966443',
        svjetlosmedja: '#D3AC8B',
        bez: '#E6C5AD',
        zelena: '#334226',
        svjetlozelena: '#588764',
        bijela: '#fafafa',
      },
    },
  },
  plugins: [],
};
