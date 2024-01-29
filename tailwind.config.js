/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'city-image': "url(./images/city.jpg)",
        'downtownnight': "url(./images/downtownnight.jpg)",
        'wmubroncos': "url(./images/wmubroncos.png)",
        'wmucampus': "url(./images/wmucampus.jpg)",
      },
      padding: {
        'maintop': '80rem',
        'maintitle': '130px',
      },
      width: {
        '300': '500px',
      },
    },
    fontFamily: {
      display: ["Poppins"],
    },
  },
  plugins: [],
}

