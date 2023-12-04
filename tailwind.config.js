/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        customBackColor: '#F6F6F6',
        LogoColor: '#BCBCBC',
        primary: '#00989E',
        second: '##414141'
      },
        screens: {
          '2xl' : '1320px',
          'sm'  : '640px',
          'cs'  : '360px'
      },
      fontFamily: {
        fontSize: '2.5rem'
      },
      background: {
        'header4' : "url('img/header4-back.png')"
      },
      border: {
        borderRadius: '100px'
      },
      height: {
        height780: '800px',
        height88: '88px'
      },
      width: {
        width90: '95%',
        width1440: '1440px',
        width1280: '80rem',
      }
    },
  },
  plugins: [],
}

