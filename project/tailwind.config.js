/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violeta: '#5d0565',
        violetaOscuro: '#300134'
      },
      fontFamily: {
        titulo: ['"Great Vibes"', 'cursive'],
        texto: ['"Gelasio"', 'serif'],
        textoAbout: ['"Parisienne"', 'cursive'],
      },
    },
  },
  plugins: [],
}

