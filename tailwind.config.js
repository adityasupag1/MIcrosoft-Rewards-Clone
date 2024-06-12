/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
      mullish: ["Mulish", "sans-serif"],
     
    },
  
    colors: {
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",

    },
   
    screens: {
      'ssm': '349px',
      'sm': '640px',
      'lsm': '700px',
      'md': '768px',
      'lmd': '900px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1536px',
    },
  },
  },
  plugins: [],
}

