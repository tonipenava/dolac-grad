/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        naslov: ['TeXGyreAdventor', 'sans-serif'],
      },
      colors: {
        smedja: '#5F574A',
        svjetlosmedja: '#635641',
        bez: '#E6C5AD',
        zelena: '#374832',
        svjetlozelena: '#588764',
        bijela: '#FEFFF7 ',
      },
    },
  },
  plugins: [],
};
