import React, { useState } from 'react';
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

export default function App() {
  const [showBackground, setShowBackground] = useState(true); //test context

  // add tailwind style to root, need reg css?
  // const rootStyle = 'outline font-Inter bg-pink-500 md:bg-green-500 lg:bg-yellow-500 mx-10 mt-10 mb-24';
  // document.getElementById('root').classList.add(rootStyle);

  return (
    <BrowserRouter>
      <div id='styleRoot' className='outline font-Inter bg-pink-500 md:bg-green-500 lg:bg-yellow-500 mx-6 mt-6 mb-20 md:mx-10 md:mt-10 md:mb-24'>

        <Header /> 
          <main>

              <Routes>
                <Route exact path='/' element={<UserPage />}></Route>
                <Route exact path='/steg1' element={<StepLogo />}></Route>
                <Route exact path='/steg2' element={<StepBackground />}></Route>
                <Route exact path='/steg3' element={<StepText />}></Route>
                <Route exact path='/steg4' element={<StepProduct />}></Route>
                <Route exact path='/steg5' element={<StepSummary />}></Route>
                <Route exact path='*' element={<NotFound />}></Route>
              </Routes>

          </main>

        <Footer /> 

      </div>
    </BrowserRouter>

  )
};


// TODO:
// Change root style with js and CSS (not tailwind?)? 

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