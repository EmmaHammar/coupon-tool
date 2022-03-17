module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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