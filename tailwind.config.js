/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  
      screens: {
        xs: '360px',
      },    
      colors: {
        'green': '#32FF9D',
        'light-green': '#7CFFC0',        
        'light': '#27292C',
        'dark': '#1E2023', // background
        'exdark': '#141516',        
        'dark-gray': '#323232',
        'gray': '#767676',
        'light-gray': '#898989', 
        'exlight-gray': '#B8B8B8',
        'teel-gray': '#373B41',
        'teel-dark-gray': '#2F3337'       
      },
    },
    fontFamily: {
      jura: ['Jura', 'sans-serif'],
    },
    fontSize: {
      xxs: ['10px', '14px'],
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '32px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '40px'],
      '5xl': ['42px', '44px']
    },
    boxShadow: {
      'xl': '0 4px 4px 0px rgba(0, 0, 0, 0.25)',
      '3xl': '0 4px 12px 0px rgba(0, 0, 0, 0.5)',
      '5xl': '0 6px 20px 0px rgba(0, 0, 0, 0.9)',
    }
  },
  plugins: [require("flowbite/plugin")],
}