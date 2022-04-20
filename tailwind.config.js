module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  
    extend: {
      colors: {
        mint: '#b1fea7',
        blue: '#31354b',
        // creme: '#f5f3ee',
        creme: '#ffffff',
        white: '#ffffff',
        black: '#0b0b09',
        disableBg: '#c6c7cd',
        disableText: '#4c5272',
        error: '#9f1d27',
        coral: '#f7844b',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Spinnaker: ['Spinnaker', 'sans-serif'],
      }
    },
    
  },
  plugins: [],
}

// themes: https://tailwindcss.com/docs/adding-custom-styles
//if add 'screens: {}' outside extend: {} -> modify existing rules, i.e. sm: '100px', instead of '640px' which is default. 
//if add 'screens: {}' inside extend -> adds a new style rule