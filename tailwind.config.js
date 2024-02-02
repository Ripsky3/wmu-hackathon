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
        'citynight': "url(./images/cn-1.jpg)",
      },
      padding: {
        'maintop': '80rem',
        'maintitle': '130px',
        'bubblesectionpadding': "10rem",
      },
      width: {
        '300': '500px',
        'registration-input': "850px",
      },
      colors: {
        'custom-yellow': "#fff900",
      },
    },
    fontFamily: {
      anka: ["AnkaCoderRegular"],
    },
  },
  plugins: [],
}

