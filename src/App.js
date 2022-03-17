import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import StepLogo from './components/StepLogo';
import StepBackground from './components/StepBackground';
import StepText from './components/StepText';
import StepProduct from './components/StepProduct';

export default function App() {
  const [showBackground, setShowBackground] = useState(false);
  return (
    <div className='App mt-3 font-Inter bg-pink-500 md:bg-green-500 lg:bg-yellow-500 container mx-auto'>
      {/* <Router> */}

        <Header /> 

        <main>
          <div id='editWrapper'>

            {/* <Switch> */}
              {/* <Route path='/steg-1-logga' component={StepLogo} />  */}

              <StepLogo />
              { showBackground ? <StepBackground /> : ''}
              <StepText />
              <StepProduct /> 
            {/* </Switch> */}

          </div>
        
        </main>
        <Footer /> 

      {/* </Router> */}
    </div>
  )
};

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