/** @type {import('tailwindcss').Config} */
export default  {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary: '#EE4266',
        primaryLight: '#FF5454',
        black:"#191919",
        gray:"#9B9B9B",
        background:'#FFFFFF',
        banner:'#FFF2D0',
        secondaryColor: 'rgb(146,188,109)',
        footer:'#EBFEEA',
        fade:"#B6B6B6"
      },
      fontSize:{
        text: '0.9rem',
        subheading:'1.2rem',
        heading: '1.4rem'
      },
      maxWidth:{
        container: '85rem',
      },
    },
  },
  plugins: [],
}