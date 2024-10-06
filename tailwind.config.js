/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'explore.html', 'content-1.html', 'gallery-1.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
    },
    boxShadow: {
      'custom': '0px 3.892px 46.708px 11.677px rgba(0, 0, 0, 0.09)',
    },
    borderRadius: {
      'custom': '18.901px 18.901px 0px 0px',
      'search': '80px 0px 0px 80px',
      'buttonsearch': '0px 40px 40px 0px',
    }, 
  },
  plugins: [],
}
}
