import React, { useState, useRef } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import UserPage from './views/UserPage';
import StepLogo from './components/StepLogo';
import StepBackground from './components/StepBackground';
import StepText from './components/StepText';
import StepProduct from './components/StepProduct';
import StepSummary from './components/StepSummary';

//global state
export const UserContext = React.createContext();

export default function App() {
  const [showBackground, setShowBackground] = useState(true); //test context

  // add tailwind style to root, need reg css?
  // const rootStyle = 'outline font-Inter bg-pink-500 md:bg-green-500 lg:bg-yellow-500 mx-10 mt-10 mb-24';
  // document.getElementById('root').classList.add(rootStyle);

  //mock DB data
  const user = {
    userId: 'userId1',
    userName: 'Frida',
    couponArrId: 'couponArrId1'
  };
  console.log("user", user);
  let usersCouponArrId = user.couponArrId;

  
  const couponArrs = [
    {

      couponArrId: 'couponArrId1', 
      couponArr: [
        {
          couponId: 'couponId1',
          heading: 'Varsågod, här får du en härlig energiboost!', 
          bodyCopy: 'Det är vårkänslor i luften och det vill vi fira genom att bjuda dig på en glass!',
          prodId: 'prodId1'
        }, {
          couponId: 'couponId2',
          heading: 'Påskharen har varit framme...', 
          bodyCopy: 'Hämta ditt smarriga påskägg!',
          prodId: 'prodId2'
        }
      ],
    }, {

      couponArrId: 'couponArrId2', 
      couponArr: [
        {
          couponId: 'couponId3',
          heading: 'Jul!', 
          bodyCopy: 'Julen är här!',
          prodId: 'prodId3'
        }, {
          couponId: 'couponId4',
          heading: 'Små grodorna, små grodorna!', 
          bodyCopy: 'Dansa runt midsommarstången',
          prodId: 'prodId4'
        }
      ],
    }

  ];
  console.log("couponArrs", couponArrs);

  //find couponArrId1
  // const couponArrsCopy = {...Object.values(couponArrs)};
  // console.log("couponArrsCopy", couponArrsCopy);
  // const findCouponArrId = couponArrsCopy.filter(obj => obj.couponArrId === usersCouponArrId);
  // console.log("findCouponArrId", findCouponArrId);
 //https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects

  const products = [
    {
      prodId: 'prodId1',
      prodImg: 'https://www.siaglass.se/media/1834/1005-trollis.jpg?width=800&height=600&bgcolor=fff', 
      prodTitle: 'Cool Down',
      prodDescription: 'Välj en valfri GB-glass.',
      prodPrice: '9kr/st',
      codeLink: '',
      prodTerms: 'Välj valfri GB-glass på 7Eleven eller Pressbyrån. Visa upp QR-koden senast 2023-12-31. Vid frågor: support@adoveo.com',
    }, {
      prodId: 'prodId2',
      prodImg: 'https://www.partyhallen.se/cache/a0/799x799-b_glad-pask-paskagg-med-godis-1.jpg', 
      prodTitle: 'Påskjakt',
      prodDescription: 'Härligt godisägg från Cloetta.',
      prodPrice: '',
      codeLink: '',
      prodTerms: 'Hämta ut ett godisägg på Hemköp. Visa upp QR-koden 2022-05-31. Vid frågor: support@adoveo.com',
    }
  ];
  console.log("products", products);


  //set state

  return (
    <BrowserRouter>
    <UserContext.Provider value={ user }>
      <div id='styleRoot' className='outline font-Inter bg-pink-500 md:bg-green-500 lg:bg-yellow-500 mx-6 mt-6 mb-20 md:mx-10 md:mt-10 md:mb-24'>

        <Header /> 
          <main>
            <div id='userPageWrapper' className='outline mt-6 mb-20 md:mt-10 md:mb-24'>
              <Routes>
                <Route exact path='/' element={<UserPage />}></Route>
                <Route exact path='/steg1' element={<StepLogo />}></Route>
                <Route exact path='/steg2' element={<StepBackground />}></Route>
                <Route exact path='/steg3' element={<StepText />}></Route>
                <Route exact path='/steg4' element={<StepProduct />}></Route>
                <Route exact path='/steg5' element={<StepSummary />}></Route>
                <Route exact path='*' element={<NotFound />}></Route>
              </Routes>
            </div>
          </main>


        <Footer /> 

      </div>
      </UserContext.Provider>
    </BrowserRouter>

  )
};


// TODO:
// Change root style with js and CSS (not tailwind?)? 
//regroup header -> nav is in this doc? or move menuitems to context

//REMEMBER:
//mobile: pink
//sm: 

// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }

// container mx-auto -> innehållet håller sig centrerad efter varje breakpoint
//ex 
// <!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
// <img class="w-16 md:w-32 lg:w-48" src="...">


{/* <p className='max-w-xl container mx-auto'>
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p> */}

// min-h-screen

//content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'

//all neeed in toolbar:
// toolbar: 'undo redo | formatselect | ' +
//               'bold italic backcolor | alignleft aligncenter ' +
//               'alignright alignjustify | image | ' +
//               'help',