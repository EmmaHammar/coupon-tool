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
        disable: '#c6c7cd',
        error: '#9f1d27',
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

//if add 'screens: {}' outside extend: {} -> modify existing rules, ex sm: '100px', ist för '640px' som är default. 
//if add 'screens: {}' inside extend -> adderar en ny stilregel


//FRÅGOR:
//addera normalize? 
//hur/ska jag använda base, utilitise osv som jag importerat enl tailwinds installeringsguide? Ska de bara ligga som tomma dok i node_modules? 