import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  // const [showCouponHeader, setShowCouponHeader] = useState(false);
  const [campaignTitle, setCampaignTitle] = useState('');

  // useEffect( () => {
  //     if (props.currentStep === 'userpage') {
  //       setShowCouponHeader(false);
  //     } else {
  //       setShowCouponHeader(true);
  //       // setCampaignTitle(`Kampanj: ${JSON.parse(localStorage.getItem('pickedCampaign')).couponTitle}`);
  //     };
  // }, [props.currentStep]); 

  // useEffect( () => {
  //   if (showCouponHeader === true) {    
  //     let navLogo = document.getElementById('nav-logo');
  //     let navBackground = document.getElementById('nav-background');
  //     let navText = document.getElementById('nav-text');
  //     let navProduct = document.getElementById('nav-product');
  //     let navSummary = document.getElementById('nav-summary');

  //     //style currentStep 
  //     switch (props.currentStep) {
  //       case 'logo': 
  //         navLogo.classList.add('current-step');
  //         navBackground.classList.remove('current-step');
  //         navText.classList.remove('current-step');
  //         navProduct.classList.remove('current-step');
  //         navSummary.classList.remove('current-step');
  //         break;
  //       case 'background': 
  //         navLogo.classList.remove('current-step');
  //         navBackground.classList.add('current-step');
  //         navText.classList.remove('current-step');
  //         navProduct.classList.remove('current-step');
  //         navSummary.classList.remove('current-step');
  //         break;
  //       case 'text': 
  //         navLogo.classList.remove('current-step');
  //         navBackground.classList.remove('current-step');
  //         navText.classList.add('current-step');
  //         navProduct.classList.remove('current-step');
  //         navSummary.classList.remove('current-step');
  //         break;
  //       case 'product': 
  //         navLogo.classList.remove('current-step');
  //         navBackground.classList.remove('current-step');
  //         navText.classList.remove('current-step');
  //         navProduct.classList.add('current-step');
  //         navSummary.classList.remove('current-step');
  //         break;
  //       case 'summary': 
  //         navLogo.classList.remove('current-step');
  //         navBackground.classList.remove('current-step');
  //         navText.classList.remove('current-step');
  //         navProduct.classList.remove('current-step');
  //         navSummary.classList.add('current-step');
  //         break;
  //       default:
  //         break;
  //     };
  //   };
  // }); 
  
  return (
    <header className=''>
        <div className='flex justify-between'>
          <Link to='/'>
            <h1 className='font-bold hover-text'>Adoveo</h1>
          </Link>
            <button className='btn btn-secondary'>LOGGA UT</button>
        </div>
    </header>
  )
};