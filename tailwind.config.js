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
        'cyberimage': "url(./images/cyberimage.jpg)",
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
        'custom-purple': "#9932cc",
        'custom-highlight-purple': "rgb(173, 104, 207)",
        'custom-blue': "#186AF4",
        'custom-pink': "#FE3BF9",
      },
    },
    fontFamily: {
      anka: ["AnkaCoderRegular"],
    },
  },
  plugins: [],
}

