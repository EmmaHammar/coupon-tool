import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  // useNavigate,
} from "react-router-dom";
import { Redirect } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import UserPage from './views/UserPage';
import StepLogo from './components/StepLogo';
import StepBackground from './components/StepBackground';
import StepText from './components/StepText';
import StepProduct from './components/StepProduct';
import StepSummary from './components/StepSummary';
import UpdateCoupon from './services/UpdateCoupon';

//global state TODO: move to separate file if have time
export const AccountContext = React.createContext();
export const SaveContext = React.createContext();

export default function App() {
  const [currentStep, setCurrentStep] = useState('');
  // const [couponLogo, setCouponLogo] = useState({}); //change to newContent, setNewContent
  const [content, setContent] = useState({}); 
  const [linkPath, setLinkPath] = useState('');

  // const navigate = useNavigate();
  const account = {
    accountId: 'accountId1',
    userId: 'userId1',
    couponIds: ['1', '2', '3'],
    pickedCouponId: '1',
  };

  //click Save/NextBtn in Footer.js, this function is in Context:
  //TODO fix so no fetch to db if style disabled btn
  const saveClick = () => {

    let newCouponObj = {
      'couponId': account.pickedCouponId
    }; 
    Object.assign(newCouponObj, content); //add content state to newCouponObj
    
    console.log("newCouponObj after assign:", newCouponObj);
    console.log("content.logo:", content.logo);
    console.log("newCouponObj", newCouponObj); 

    UpdateCoupon(newCouponObj); //update db

    //navigate
    // navigate(`${linkPath}`);
  }; 

  return (
    <BrowserRouter>
    <AccountContext.Provider value={ account }>
      <div id='styleRoot' className='outline outline-pink-500 md:outline-green-500 lg:outline-yellow-500 font-Inter mx-6 mt-6 mb-20 md:mx-10 md:mt-10 md:mb-24'>

        <Header /> 
          <main>
            <div id='userPageWrapper' className='mt-6 mb-20 md:mt-10 md:mb-24'>
              <SaveContext.Provider value={ saveClick }>
                <Routes>
                  <Route exact path='/' element={<UserPage />}></Route>
                  <Route 
                    exact path='/steg1' 
                    element= { 
                      <StepLogo 
                        currentStep={currentStep} 
                        setCurrentStep={setCurrentStep}
                        content={content}
                        setContent={setContent}
                        linkPath={linkPath}
                        setLinkPath={setLinkPath}
                      />
                    }>
                  </Route>

                  <Route 
                    exact path='/steg2' 
                    element= {
                      <StepBackground 
                        currentStep={currentStep} 
                        setCurrentStep={setCurrentStep}
                        content={content}
                        setContent={setContent}
                        linkPath={linkPath}
                        setLinkPath={setLinkPath}
                      />
                    }>
                  </Route>

                  <Route 
                    exact path='/steg3' 
                    element= {
                      <StepText 
                        currentStep={currentStep} 
                        setCurrentStep={setCurrentStep}  
                        content={content}
                        setContent={setContent}
                        linkPath={linkPath}
                        setLinkPath={setLinkPath}
                      />
                    }>
                  </Route>

                  <Route 
                    exact path='/steg4' 
                    element= {
                      <StepProduct 
                        currentStep={currentStep} 
                        setCurrentStep={setCurrentStep}   
                      />
                    }>

                  </Route>

                  <Route exact path='/steg5' element={<StepSummary />}></Route>
                  <Route exact path='*' element={<NotFound />}></Route>
                </Routes>
              </SaveContext.Provider>
            </div>
          </main>
      </div>
      </AccountContext.Provider>
    </BrowserRouter>

  )
};


// TODO:
// Change root style with js and CSS (not tailwind?)? 
  // add tailwind style to root, need reg css?
  // const rootStyle = 'outline font-Inter bg-pink-500 md:bg-green-500 lg:bg-yellow-500 mx-10 mt-10 mb-24';
  // document.getElementById('root').classList.add(rootStyle);

//regroup header -> nav is in this doc? or move menuitems to context

//change so footer not wrapped in main


//REMEMBER DON'T CHANGE STATE DIRECTLY, MAKE COPY
    //save new logo to state 
    // let couponLogoCopy = {...couponLogo}; //copy state
    // couponLogoCopy = {'couponLogo': newCoupon.couponLogo}; //add new logo 
    // console.log("couponLogoCopy:", couponLogoCopy);

    // setCouponLogo(couponLogoCopy); //update state with new logo
    

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