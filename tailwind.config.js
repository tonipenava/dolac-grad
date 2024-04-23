/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/livingRoom.jpg')",
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        naslov: ['TeXGyreAdventor', 'sans-serif'],
        bebasNeue: ['Bebas Neue', 'sans-serif'],
        textTitle: ['Libre Caslon Text', 'serif'],
      },
      colors: {
        smedja: '#5F574A',
        svjetlosmedja: '#D3AC8B',
        bez: '#E6C5AD',
        zelena: '#374832',
        svjetlozelena: '#588764',
        bijela: '#FEFFF7 ',
      },
    },
  },
  plugins: [],
};
