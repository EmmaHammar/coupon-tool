# About project
The aim of this project is to launch a user-friendly coupon tool where a user can create a branded digital coupon from a template. 

# Start project
Heroku:
- Frontend: https://coupon-tool-frontend.herokuapp.com/
- Backend: https://coupon-tool-backend.herokuapp.com/

Start locally:
Frontend repo:
- git clone https://github.com/EmmaHammar/coupon-tool
- npm install
- npm start

Backend repo: 
- git clone https://github.com/EmmaHammar/coupon-tool-backend
- npm instsall
- npm start (dev mode: nodemon start)

# Task
Du ska skapa en webbsida/tjänst/applikation till ett företag eller kommande företag. Projektet ska vara avgränsat så du börjar och slutar projektet under tiden för examensarbete. Kursen är 6 veckor lång på heltid dvs 240 timmars jobb inklusive projektbeskrivning, projektplan, själva "produkten" samt redovisning.
Arbetet görs enskilt.

## Ska vara med & användas:
- GitHub (om du jobbar med ett skarpt projekt som använder ett annat versionshanteringssystem, så löser vi det)
Dynamiskt innehåll (använd ett API eller en databas)
Sidan ska vara interaktiv (ej enbart HTML och CSS)
Genomfört någon typ av testning (enhetstestning, integrationstest, gränssnittstest eller motsv.)
Hållbar och dokumenterad kod
Tjänsten/produkten ska vara tillgänglighetsgranskad och -anpassad

## Obligatoriska moment – välj (minst) 3 av dessa:
- Använd minst 1 ramverk eller bibliotek (t.ex. React, Vue, Next.js osv.).
Det ska vara korrekt använt och en diskussion kring valet ska finnas i dokumentationen tillsammans med begränsningar i form av beroenden, versionskrav med mera.
- “Produkten” ska vara responsiv, dvs. anpassad för alla enheter.
Med anpassning menas att utseende OCH funktion förändras på så sätt att inga av sitens kommunikations- och funktionskrav är otillgängliga eller icke fungerande samt enhetens möjligheter och begränsningar nyttjas maximalt.
- All data på webbplatsen laddas och visas asynkront (inga omladdningar av sidan) samtidigt som allt innehåll är länkbart via läsbara URL:ar.
- Stilmallar ska implementeras med hjälp av en preprocessor (Less, Sass) eller liknande (t.ex. styled components) och dess funktioner och struktur ska användas enligt respektive best practice.

## För Godkänt:
Nått samtliga mål för kursen och uppgiften, samt följt instruktionerna.

## För Väl Godkänt:
Visar på fördjupad kunskap kring mål och syfte, och för en reflektion kring detta under projektets gång.
Har levererat ett projekt som överträffar Godkänd-nivå i teknisk lösning och kreativ idé.

# Techniques
## React - frontend
- React: npx create-react-app
- Routing: npm install react-router-dom
- TinyMCE - WYSIWYG editor: https://www.youtube.com/watch?v=R-k5i1Qp6Oc
TODO: remove npm install tinymce https://www.npmjs.com/package/tinymce ?
Only keep: npm install --save @tinymce/tinymce-react https://www.tiny.cloud/docs/integrations/react/ and useRef Hook: https://www.geeksforgeeks.org/react-js-useref-hook/
- Context - state manager. https://www.youtube.com/watch?v=AoS-lMO4Ad0

## Node.js - backend
Express server with node.js
- npx express-generator --no-view
- npm install
- npm start

already (npm install -g nodemon -> npm nodemon in dev mode)

## MongoDB - database
- npm install mongodb (in backend repo)

user:
username: mongodbUser
pass: mongodb

## TailWind 
- CSS: https://tailwindcss.com/docs/guides/create-react-app, 
- kom igång m TailWind: https://www.linkedin.com/learning/search?keywords=react%20tailwind&u=57075785,
- essential training: https://www.linkedin.com/learning/tailwind-css-essential-training/custom-builds?autoplay=true&resume=false&u=57075785 
- install PostCSS Language Support in VCS extension (else lint(?) errors)
- install VCS extension helping with "syntax": Tailwind CSS IntelliSense

# Files
- Planning KANBAN: https://github.com/users/EmmaHammar/projects/1
- Wireframe, component tree, function analysis: https://www.figma.com/file/H8dU1CUZJiLaYCsFYE93mT/coupon-tool?node-id=0%3A1
- Prototype: se design folder. For interactions, see Adobe XD file.







//TODO cleaning:
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


@import "_normalize"; ADDERA I TAILWIND??

//mobile version 375px x 667px
@import "_base.scss"; 

// ipad mini 
@media screen and (min-width: 736px) {
    @import "_ipad-mini.scss";
}

//desktop, height: 1024px
@media screen and (min-width: 1440px) { 
    @import "_desktop.scss";
}

======
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* so I can add custom classes. These are my layers: */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* layer=choose which layer to target, base styles: headline or paragraph, apply=call one of the tailwind styles */

//if want to style default for all normal elements:
@layer base {
    h1 {
        @apply text-red-500;
        background: salmon; /*can add normal css also in this file*/
    }
}

//own components
@layer components {
    .btn {
        @apply active:bg-gray-500
        hover:bg-red-500
        hover:text-white
        cursor-pointer
        border-gray-500
        border-4
        rounded-md
        inline-block
        p-2
        mt-2
        mb-4;
    }
}



=============
Context: https://www.youtube.com/watch?v=AoS-lMO4Ad0 
providers = skicka neråt
consumers = ta emot
Men använd ej för mkt för skapar onödigt många omrenderingar

//OBS nedan blir ERROR: can only have 1 child(...) -> 
    <UserContext.Consumer>
      <div id='userPageWrapper' className='outline'>
        <h2>HEJ {user.userName}!</h2>
        <button className='btn' onClick={handleClick}>Skapa ny kampanj</button>
      </div>
    </UserContext.Consumer>
LÖSNING: wrappa upp med ditt värde du skickade i <UserContext.Provider value={ user }>
Då blir det såhär:

    <UserContext.Consumer>
      { user => 
      <div id='userPageWrapper' className='outline'>
        <h2>HEJ {user.userName}!</h2>
        <button className='btn' onClick={handleClick}>Skapa ny kampanj</button>
      </div>
      }
    </UserContext.Consumer>