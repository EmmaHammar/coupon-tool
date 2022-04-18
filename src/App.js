import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
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
// import Preview from './components/Preview';
import Footer from './components/Footer';

//global state 
export const AccountContext = React.createContext();

export default function App() {
  const [showFooter, setShowFooter] = useState(false);
  // const [showPreview, setShowPreview] = useState(false);

  const [currentStep, setCurrentStep] = useState('');
  const [content, setContent] = useState('');
  const [initialContent, setInitialContent] = useState('');

  const [linkPath, setLinkPath] = useState(''); //TODO: Rename: linkPathNext
  const [linkPathBack, setLinkPathBack] = useState('');
  const [isNextBtnActive, setIsNextBtnActive] = useState(false);

  const [toolBarOptions, setToolBarOptions] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [pickedProd, setPickedProd] = useState({});
  const [initialProdId, setInitialProdId] = useState('');

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
  const saveClick = (evt) => {
  //Only save to db if content is correctly filled
    if (document.getElementById('nextBtn').classList.contains('btn-primary-inactive') === true) {
      
      document.getElementById('errorMsg').innerHTML = 'Du måste lägga till innehåll för att kunna gå till nästa steg.';

    } else {    
      //TODO test have let prodObj outside if + try add couponId object to pickedProd (also object) i stil med: prodObj = {'couponId': account.pickedCouponId, pickedProdObj alla object}
      
      //if StepProduct:
      if (linkPath === '/steg5') {
        // console.log("initialProdId??", initialProdId);
        //only save in db if something has changed, i.e. user has added a new product comparing to what's saved in db 
          if ( (initialProdId !== '') && (document.getElementById(initialProdId).classList.contains('btn-primary')) ) {
            // console.log("inget har ändrats -> spara EJ");
          } else {
            // console.log("något har ändrats -> spara i DB");
            let prodObj = {
              'couponId': account.pickedCouponId, 
              'prodId': pickedProd.prodId,
              'prodImg': pickedProd.prodImg,
              'prodImgAltText': pickedProd.prodImgAltText,
              'codeLink': pickedProd.codeLink,
              'terms': pickedProd.terms
          };     
            
            UpdateCoupon(prodObj); //update db with pickedProd
          }
      } 
      else { //if all other step (logo, bg, text):

        //save to db only if something has changed
        if (initialContent === content) {
          // console.log("spara EJ, inget har ändrats");
        } else {
          // console.log("spara, något har ändrats");
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
            <div id='app' className='h-screen font-Inter px-6 pt-6 pb-20 md:px-10 md:pb-24 text-blue'>  
            {/* <div id='app' className='h-screen font-Inter px-6 pt-6 pb-20 md:px-10 md:pb-24 text-blue bg-pink-500 md:bg-green-500 lg:bg-yellow-500'> */}

              <Header 
                currentStep={currentStep}
                isNextBtnActive={isNextBtnActive}
                content={content}
                initialContent={initialContent}
                linkPath={linkPath}
              /> 

              <main className='flex flex-row flex-wrap justify-around gap-x-4 items-start pt-6 pb-28 md:pt-10'>

                <div id='userPageWrapper' className='pb-16 max-w-full'>
                    <Routes>
                      <Route exact path='/' element={
                        <UserPage 
                          // setShowPreview={setShowPreview}
                          setShowFooter={setShowFooter}
                          setCurrentStep={setCurrentStep}
                        />}>
                      </Route>
                      <Route 
                        exact path='/steg1' 
                        element= { 
                          <StepLogo 
                            // setShowPreview={setShowPreview}
                            setShowFooter={setShowFooter}
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
                          />
                        }>
                      </Route>

                      <Route 
                        exact path='/steg2' 
                        element= {
                          <StepBackground 
                            // setShowPreview={setShowPreview}
                            setShowFooter={setShowFooter}
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
                          />
                        }>
                      </Route>

                      <Route 
                        exact path='/steg3' 
                        element= {
                          <StepText 
                            // setShowPreview={setShowPreview}
                            setShowFooter={setShowFooter}
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
                          />
                        }>
                      </Route>

                      <Route 
                        exact path='/steg4' 
                        element= {
                          <StepProduct 
                          // setShowPreview={setShowPreview}
                          setShowFooter={setShowFooter}
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
                          pickedProd={pickedProd}
                          setPickedProd={setPickedProd}
                          setInitialProdId={setInitialProdId}
                          
                          isNextBtnActive={isNextBtnActive}
                          setIsNextBtnActive={setIsNextBtnActive}
                          />
                        }>

                      </Route>

                      <Route exact path='/steg5' element= {
                        <StepSummary
                          // setShowPreview={setShowPreview}
                          setShowFooter={setShowFooter}
                          currentStep={currentStep} 
                          setCurrentStep={setCurrentStep}  
                          content={content}
                          setContent={setContent}
                          setLinkPath={setLinkPath}
                          setLinkPathBack={setLinkPathBack}
                          setIsLoading={setIsLoading}
                          setIsNextBtnActive={setIsNextBtnActive}
                        />
                      }>

                      </Route>
                      <Route exact path='*' element={
                        <NotFound 
                          // setShowPreview={setShowPreview}
                        />}>
                      </Route>
                    </Routes>
                  
                    <div id='errorWrapper'>
                      <p id='errorMsg' className='errorMsg'></p>
                    </div> 

                </div>
                {/* {
                  showPreview ? <Preview isLoading={isLoading} setIsLoading={setIsLoading}/> : ''
                } */}
                
              </main>

              {
                showFooter ? 
                  <Footer 
                    currentStep={currentStep}
                    linkPath={linkPath} 
                    isNextBtnActive={isNextBtnActive}
                    setIsNextBtnActive={setIsNextBtnActive}
                    saveClick={saveClick}
                    linkPathBack={linkPathBack}
                  /> 
                : ''
              }
            </div>
          }
        </AccountContext.Provider>
    </BrowserRouter>
  )
};