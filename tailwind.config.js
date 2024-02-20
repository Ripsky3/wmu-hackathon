/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'city-image': "url(./images/city.jpg)",
        'downtownnight': "url(./images/downtownnight.jpg)",
        'wmubroncos': "url(https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/wmich.sidearmsports.com/images/logo_WMU_Spirit_2022.svg)",
        'wmucampus': "url(./images/wmucampus.jpg)",
        'citynight': "url(./images/cn-1.jpg)",
        'cyberimage': "url(./images/cyberimage.jpg)",
        "mainbackground": "url(./images/background/backgroundone.jpg)",
      },
      padding: {
        'maintop': '80rem',
        'maintitle': '130px',
        'bubblesectionpadding': "10rem",
      },
      margin: {
        'maintitle': "125px",
      },
      width: {
        '300': '500px',
        'registration-input': "850px",
      },
      colors: {
        'custom-yellow': "#fff900",
        'custom-purple': "#9932cc",
        'custom-highlight-purple': "rgb(173, 104, 207)",
        'custom-blue': "#9FDDFF",
        'custom-pink': "#FE3BF9",
      },
    },
    fontFamily: {
      abang: ['Abang'],
      proteststrike: ['Protest Strike'],
      anta: ["Anta"],
    }
  },
  plugins: [],
}

