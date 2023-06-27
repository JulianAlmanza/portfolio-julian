/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      flex: {
        '2': '1 0 140px',
        '3': '1 0 50px'
      }, 
      fontFamily: {
        'poppins' : ['"Poppins"', 'sans-serif']
      },   
      textColor: {        
        'span': '#0ef',
        'btn1' : '#1f242d',
        'btn2' : '#323946',
      },
      backgroundColor: {
        'page1': '#1f242d',
        'page2': '#323946',
        'btn': '#0ef',
    },
  },
  plugins: [],
}
}