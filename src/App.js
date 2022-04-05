import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import Loader from './components/Loader';
import Header from './components/Header';
import NotFound from './components/NotFound';
import UserPage from './views/UserPage';
import StepLogo from './components/StepLogo';
import StepBackground from './components/StepBackground';
import StepText from './components/StepText';
import StepProduct from './components/StepProduct';
import StepSummary from './components/StepSummary';
import UpdateCoupon from './services/UpdateCoupon';
import Preview from './components/Preview';
import Footer from './components/Footer';

//global state TODO: move to separate file if have time
export const AccountContext = React.createContext();
// export const SaveContext = React.createContext();

export default function App() {
  const [currentStep, setCurrentStep] = useState('');
  const [content, setContent] = useState(''); //TODO change to string?
  const [initialContent, setInitialContent] = useState('');
  const [linkPath, setLinkPath] = useState('');
  const [linkPathBack, setLinkPathBack] = useState('');

  const [toolBarOptions, setToolBarOptions] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [pickedProd, setPickedProd] = useState({});
  const [initialProdId, setInitialProdId] = useState('');

  const [isNextBtnActive, setIsNextBtnActive] = useState(false);

  const [showPreview, setShowPreview] = useState(false);

  const [editorValue, setEditorValue] = useState(''); //TODO remove?
  const account = {
    accountId: 'accountId1',
    userId: 'userId1',
    couponIds: ['1', '2', '3'],
    pickedCouponId: '1',
  };

  useEffect( () => {
    setTimeout( () => {
      setIsLoading(false)
    }, 1000);
  });


  //click Save/NextBtn in Footer.js, this function is in Context:
  const saveClick = () => {
    console.log("saveClick funkar");

  //Only save to db if content is correctly filled
    if (document.getElementById('nextBtn').classList.contains('btn-primary-inactive') === true) {
      document.getElementById('errorMsg').innerHTML = 'Du måste lägga till innehåll för att kunna gå till nästa steg.';
      
    } else {      
      //TODO test have let prodObj outside if + try add couponId object to pickedProd (also object) i stil med: prodObj = {'couponId': account.pickedCouponId, pickedProdObj alla object}
      
      //if StepProduct:
      if (linkPath === '/steg5') {
        console.log("initialProdId??", initialProdId);

        //only save in db if something has changed, i.e. user has added a new product comparing to what's saved in db 
          if ( (initialProdId !== '') && (document.getElementById(initialProdId).classList.contains('btn-primary')) ) {
            console.log("inget har ändrats -> spara EJ");
          } else {
            console.log("något har ändrats -> spara i DB");
            let prodObj = {
              'couponId': account.pickedCouponId, 
              'prodId': pickedProd.prodId,
              'prodImg': pickedProd.prodImg,
              'codeLink': pickedProd.codeLink,
              'terms': pickedProd.terms
          };     
            
            UpdateCoupon(prodObj); //update db with pickedProd
          }
      } 
      else { //if all other step (logo, bg, text):

        //save to db only if something has changed
        if (initialContent === content) {
          console.log("spara EJ, inget har ändrats");
        } else {
          console.log("spara, något har ändrats");
          let newCouponObj = {
            'couponId': account.pickedCouponId, 
            [currentStep] : content
          };     

          UpdateCoupon(newCouponObj); //update db with coupon logo, bg or text
        }
      };
    };
  }; 

  return (
    <BrowserRouter>

        <AccountContext.Provider value={ account }>
          { isLoading ? <Loader /> : 
            <div id='styleRoot' className='outline outline-pink-500 md:outline-green-500 lg:outline-yellow-500 font-Inter mx-6 mt-6 mb-20 md:mx-10 md:mb-24 text-blue'>          
              <Header 
                currentStep={currentStep}
                isNextBtnActive={isNextBtnActive}
                content={content}
                initialContent={initialContent}

              /> 

              <main className='h-5/6 flex flex-row flex-wrap justify-around lg:justify-around gap-x-4 items-start pt-6 md:pt-10'>

                <div id='userPageWrapper' className='mb-10'>
                  {/* <SaveContext.Provider value={saveClick}> */}
                    <Routes>
                      <Route exact path='/' element={
                        <UserPage 
                          setShowPreview={setShowPreview}
                          setCurrentStep={setCurrentStep}
                        />}>
                      </Route>
                      <Route 
                        exact path='/steg1' 
                        element= { 
                          <StepLogo 
                            currentStep={currentStep} 
                            setCurrentStep={setCurrentStep}
                            content={content}
                            setContent={setContent}
                            initialContent={initialContent}
                            setInitialContent={setInitialContent}

                            linkPath={linkPath}
                            setLinkPath={setLinkPath}
                            linkPathBack={linkPathBack}
                            setLinkPathBack={setLinkPathBack}
                            toolBarOptions={toolBarOptions}
                            setToolBarOptions={setToolBarOptions}

                            isNextBtnActive={isNextBtnActive}
                            setIsNextBtnActive={setIsNextBtnActive}

                            setShowPreview={setShowPreview}
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
                            initialContent={initialContent}
                            setInitialContent={setInitialContent}

                            linkPath={linkPath}
                            setLinkPath={setLinkPath}
                            linkPathBack={linkPathBack}
                            setLinkPathBack={setLinkPathBack}
                            toolBarOptions={toolBarOptions}
                            setToolBarOptions={setToolBarOptions}
                            isNextBtnActive={isNextBtnActive}
                            setIsNextBtnActive={setIsNextBtnActive}
                            setShowPreview={setShowPreview}
                            editorValue={editorValue}
                            setEditorValue={setEditorValue}
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
                            initialContent={initialContent}
                            setInitialContent={setInitialContent}

                            linkPath={linkPath}
                            setLinkPath={setLinkPath}
                            linkPathBack={linkPathBack}
                            setLinkPathBack={setLinkPathBack}
                            toolBarOptions={toolBarOptions}
                            setToolBarOptions={setToolBarOptions}
                            isNextBtnActive={isNextBtnActive}
                            setIsNextBtnActive={setIsNextBtnActive}
                            setShowPreview={setShowPreview}
                          />
                        }>
                      </Route>

                      <Route 
                        exact path='/steg4' 
                        element= {
                          <StepProduct 
                          currentStep={currentStep} 
                          setCurrentStep={setCurrentStep}  
                          content={content}
                          setContent={setContent}
                          linkPath={linkPath}
                          setLinkPath={setLinkPath}
                          linkPathBack={linkPathBack}
                          setLinkPathBack={setLinkPathBack}
                          pickedProd={pickedProd}
                          setPickedProd={setPickedProd}
                          setInitialProdId={setInitialProdId}
                          
                          isNextBtnActive={isNextBtnActive}
                          setIsNextBtnActive={setIsNextBtnActive}
                          setShowPreview={setShowPreview}
                          />
                        }>

                      </Route>

                      <Route exact path='/steg5' element= {
                        <StepSummary 
                          currentStep={currentStep} 
                          setCurrentStep={setCurrentStep}  
                          content={content}
                          setContent={setContent}
                          setLinkPath={setLinkPath}
                          setLinkPathBack={setLinkPathBack}
                          setShowPreview={setShowPreview}
                        />
                      }>

                      </Route>
                      <Route exact path='*' element={
                        <NotFound 
                          setShowPreview={setShowPreview}
                        />}>
                      </Route>
                    </Routes>
                  {/* </SaveContext.Provider> */}
                  <div id='errorWrapper'>
                    <p id='errorMsg'></p>
                  </div>

                </div>
                {
                  showPreview ? <Preview /> : ''
                }
                
              </main>
              <Footer 
                linkPath={linkPath} 
                isNextBtnActive={isNextBtnActive}
                setIsNextBtnActive={setIsNextBtnActive}
                saveClick={saveClick}
                linkPathBack={linkPathBack}
              /> 
            </div>
          }
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



//PREVIEW
//useEffect - get from db -> print 
//editorChange -> change in preview
