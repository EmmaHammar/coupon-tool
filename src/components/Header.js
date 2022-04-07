import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const [showCouponHeader, setShowCouponHeader] = useState(false);

  useEffect( () => {
      if (props.currentStep === 'userpage') {
        setShowCouponHeader(false);
      } else {
        setShowCouponHeader(true);
      };
  }, [props.currentStep]); 

  useEffect( () => {
    if (showCouponHeader === true) {    
      let navLogo = document.getElementById('nav-logo');
      let navBackground = document.getElementById('nav-background');
      let navText = document.getElementById('nav-text');
      let navProduct = document.getElementById('nav-product');
      let navSummary = document.getElementById('nav-summary');

      //style currentStep 
      switch (props.currentStep) {
        case 'logo': 
          navLogo.classList.add('current-step');
          navBackground.classList.remove('current-step');
          navText.classList.remove('current-step');
          navProduct.classList.remove('current-step');
          navSummary.classList.remove('current-step');
          break;
        case 'background': 
          navLogo.classList.remove('current-step');
          navBackground.classList.add('current-step');
          navText.classList.remove('current-step');
          navProduct.classList.remove('current-step');
          navSummary.classList.remove('current-step');
          break;
        case 'text': 
          navLogo.classList.remove('current-step');
          navBackground.classList.remove('current-step');
          navText.classList.add('current-step');
          navProduct.classList.remove('current-step');
          navSummary.classList.remove('current-step');
          break;
        case 'product': 
        navLogo.classList.remove('current-step');
        navBackground.classList.remove('current-step');
        navText.classList.remove('current-step');
        navProduct.classList.add('current-step');
        navSummary.classList.remove('current-step');
        break;
        case 'summary': 
        navLogo.classList.remove('current-step');
        navBackground.classList.remove('current-step');
        navText.classList.remove('current-step');
        navProduct.classList.remove('current-step');
        navSummary.classList.add('current-step');
        break;
        default:
          break;
      };
    };
  }); 
  
  return (
    <header className=''>
        <div className='flex justify-between'>
          <Link to='/'>
            <h1 className='font-bold hover-text'>Adoveo</h1>
          </Link>
            <div className='btn btn-secondary'>LOGGA UT</div>
        </div>
        {
          showCouponHeader ? 
          <div id='couponHeader' className='max-w-4xl'>
              <h2 className='lg:w-2/5'>Glasskupong mars 2022</h2>
              <nav className='md:border-solid md:border-blue md:border-2'>
                <ul className='md:flex md:justify-between md:items-center lg:min-w-fit '>
                  <li>
                    <h3 id='nav-logo' className='nav-menu-item'>1. Logga</h3>
                  </li>
                  <li>
                    <h3 id='nav-background' className='nav-menu-item'>2. Bakgrund</h3>
                  </li>
                  <li>
                    <h3 id='nav-text' className='nav-menu-item'>3. Din hälsning</h3>
                  </li>
                  <li>
                    <h3 id='nav-product' className='nav-menu-item'>4. Välj produkt</h3>
                  </li>
                  <li>
                    <h3 id='nav-summary' className='nav-menu-item'>5. Summering</h3>
                  </li>
                </ul>  
              </nav>
          </div>  
        : ''
        }      
    </header>
  )
};

//TODO decide if style done + style clickable
{/* <nav className='justify-between items-center lg:w-3/5 flex flex-wrap bg-blue text-mint px-2'>
    <h3 id='nav-logo' className='nav-menu-item logo' onClick={clickStep}>Logga</h3>
    <h3 id='nav-background' className='nav-menu-item' onClick={clickStep}>Bakgrund</h3>
    <h3 id='nav-text' className='nav-menu-item' onClick={clickStep}>Din hälsning</h3>
    <h3 id='nav-product' className='nav-menu-item' onClick={clickStep}>Välj produkt</h3>
    <h3 id='nav-summary' className='nav-menu-item' onClick={clickStep}>Summering</h3>
</nav> */}