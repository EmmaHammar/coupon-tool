# ABOUT PROJECT
The aim of this project is to launch a user-friendly coupon tool where a user can create a branded digital coupon from a template. 

# START PROJECT
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
- npm install
- npm start (dev mode: nodemon start)

## Heroku
brew tap heroku/brew && brew install heroku
heroku login
git push heroku branch_name
https://devcenter.heroku.com/articles/heroku-cli and https://stackoverflow.com/questions/71892543/heroku-and-github-items-could-not-be-retrieved-internal-server-error 

# TASK
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
Visar på fördjupad kunskap kring mål och syfte, och för en reflektion kring detta under projektets gång. Har levererat ett projekt som överträffar Godkänd-nivå i teknisk lösning och kreativ idé.

# FILES
- Planning KANBAN: https://github.com/users/EmmaHammar/projects/1
- Wireframe, component tree, function analysis: https://www.figma.com/file/H8dU1CUZJiLaYCsFYE93mT/coupon-tool?node-id=0%3A1
- Prototype: se design folder. For interactions, see Adobe XD file.

# TECHNIQUES
I've chosen React on frontend since it's very fast with less loading time comparing for example Angular that's used by the LIA company today. As a backend, I've set up an express server with Node.js since it's very quick to get started and it's also fast and I think suitable together with React. I used MongoDB Atlas as database since it's very easy to get started and the free version is a good match for the scope of this project. I've chosen a NoSQL since I think the users can have many different types of campaigns which contain different types of content. I also think the offer to the clients will develop but it's uncertain in what ways, so therefore, I wanted the flexibility of the NoSQL comparing to SQL databases. 

I wanted to test a framework for the CSS and according to some trend reports, Tailwind is growing fast in popularity so therefore I chose Tailwind. 

At my LIA company, they have recently added a WYSIWYG editor so we discussed and came to the conclusion that it was appropriate that I also used that type of editor in this project. 

I also wanted to test a state manager and at my LIA I used Redux but I thought it was quite messy with all the steps and after I red about state managers for React and also talked with my fellow students, I decided to test Context since it's perceived as more modern (and it seems like Redux is about to get phased out). 

## React - frontend
- React: npx create-react-app
- Routing: npm install react-router-dom

## Node.js - backend
Express server with node.js
- npx express-generator --no-view
- npm install
- npm start

already (npm install -g nodemon -> npm nodemon in dev mode)

## MongoDB - database
- npm install mongodb (in backend repo)

## TailWind - CSS 
- CSS: https://tailwindcss.com/docs/guides/create-react-app, 
- kom igång med TailWind: https://www.linkedin.com/learning/search?keywords=react%20tailwind&u=57075785,
- essential training: https://www.linkedin.com/learning/tailwind-css-essential-training/custom-builds?autoplay=true&resume=false&u=57075785 
- install PostCSS Language Support in VCS extension (to avoid lint errors)
- install VCS extension helping with "syntax": Tailwind CSS IntelliSense

## TinyMCE - WYSIWYG editor: https://www.youtube.com/watch?v=R-k5i1Qp6Oc
npm install --save @tinymce/tinymce-react https://www.tiny.cloud/docs/integrations/react/ and useRef Hook: https://www.geeksforgeeks.org/react-js-useref-hook/

## Context - state manager
https://www.youtube.com/watch?v=AoS-lMO4Ad0

# Storybook - for dev (planned to be used in future development after this project scope)
- npx sb init //install
- npm run storybook //Starts Storybook in development mode

# TESTING
I've chosen to conduct user tests since I think it's a good way fo getting quick feedback of the UX and the main functions. I planned for testing in both sprint3 and sprint4 since I wanted to have the testing in close collaboration with the development. I also made a demo of my progress for my LIA company once a week and asked for feedback that I took into account for the upcoming sprint. 

# FUTURE DEVELOPMENT
- Link my project to the steps before (login and create account, statistics and other functionalities on the userpage) and the steps after (upload receiver list, payment methods, and sms text). 
- Clickable stepper so the user can take a shortcut to a certain step.
- Show preview throught the whole create coupon journey. 
- Connect all buttons such as 'Logga ut', 'Visa koden', Kampanj 1, Kampanj 2 osv. Add function where click on Create campaign generates a new id, and when saved it's saved on that id. When then visit the userpage, all the saved campaigns are visible and also editable.
- Test work with storybook since this project will grow and it seems to be a very good way of minimize errors and keep track of all relationships between components. 
- Evaluate WYSIWYG editor - upgrade TINYMCE or use Summernote (that the LIA company is using today).
- Making alt text mandatory for img upload in TinyMCE?
- Test more on users if switch back to color picker on StepBackground instead of Hex.
- Add custom fonts possibility: https://www.tiny.cloud/blog/tinymce-custom-font-family/ 

# OTHER
- https://stackoverflow.com/questions/70585472/websocketclient-js16-websocket-connection-to-ws-localhost3000-ws-failed-r to handle Websocket connection failed error.