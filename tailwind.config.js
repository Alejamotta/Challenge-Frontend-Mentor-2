/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {

        "SoftOrange": "hsl(35, 77%, 62%)",
        "SoftRed": "hsl(5, 85%, 63%)",
        "Off-white": "hsl(36, 100%, 99%)",
        "Grayish-blue": "hsl(233, 8%, 79%)",
        "Dark-grayish-blue": "hsl(236, 13%, 42%)",
        "Very-dark-blue": "hsl(240, 100%, 5%)",
      },

      fontFamily: {
        "principal": ["Inter", 'sans-serif'],
      },

      backgroundImage: {
        "abrir-menu": "url(../assets/images/icon-menu.svg)",
        "cerrar-menu": "url(../assets/images/icon-menu-close.svg)",
        "mobile": "url(../assets/images/image-web-3-mobile.jpg)",
        "desktop": "url(../assets/images/image-web-3-desktop.jpg)"

      },
      boxShadow: {
        "fondo": "-8rem 0 10rem #00000085",
      },


    },
  },
  plugins: [],
}

