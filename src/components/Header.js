import { navigate } from '@storybook/addon-links';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AccountContext } from '../App';
import GetCoupon from '../services/GetCoupon';


export default function Header(props) {
  const [showCouponHeader, setShowCouponHeader] = useState(false);
  const account = useContext(AccountContext);

  // const [addNavClass, setAddNavClass] = useState(false);
  // const couponHeaderTemplate = `
  //   <div className='lg:flex justify-start mt-4'>
  //     <h2 className='lg:w-2/5'>Glasskupong mars 2022</h2>
  //     <nav className='justify-between items-center lg:w-3/5 flex flex-wrap bg-blue text-mint md:px-2'>
  //         <Link to='/steg1'>
  //           <h3 id='nav-logo' className='nav-menu-item'>Logga</h3>
  //         </Link>
  //         <Link to='/steg2'>
  //           <h3 id='nav-background' 
  //           className='nav-menu-item'>Bakgrund</h3>
  //         </Link>
  //         <Link to='/steg3'>
  //           <h3 id='nav-text' className='nav-menu-item'>Din hälsning</h3>
  //         </Link>
  //         <Link to='/steg4'>
  //           <h3 id='nav-product' className='nav-menu-item'>Välj produkt</h3>
  //         </Link>
  //         <Link to='/steg5'>
  //           <h3 id='nav-summary' className='nav-menu-item'>Summering</h3>
  //         </Link>
  //     </nav>
  //   </div>
  // `;

  //make steps in Stepper clickable only if currentstep is accurated filled in TODO not working
  // useEffect( () => {
  //   if ( props.content !== '') {
  //     console.log("HEADER: spara i db -> nästa steg + prevSteg är clickable");
  //   } else {
  //     console.log("HEADER: endast prevSteg är clickable");

  //   }

  //   if (props.initialContent !== '') {
  //     console.log("HEADER: spara i db -> nästa steg + prevSteg är clickable");
  //   } else {
  //     console.log("HEADER: endast prevSteg är clickable");

  //   }
  // })

  //Show/hide couponHeader if userpage or not: TODO works correct but is not used. 
  useEffect( () => {
      if (props.currentStep === 'userpage') {
        // console.log("göm nav");
        setShowCouponHeader(false);
      } else {
        // console.log("visa nav");
        setShowCouponHeader(true);
        // setAddNavClass(true);
      }
  }, [props.currentStep]); 


  useEffect( () => {
    //fetch db

    let info = 
    {
      'pickedCouponId': account.pickedCouponId, 
    //   'currentStep': props.currentStep
    };
    let navLogo = document.getElementById('nav-logo');
    let navBackground = document.getElementById('nav-background');
    let navText = document.getElementById('nav-text');
    let navProduct = document.getElementById('nav-product');
    let navSummary = document.getElementById('nav-summary');


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
    }

    const cb = (res) => {
      console.log("res Coupon Header.js:", res.coupon[0]);

      if (res.coupon[0].logo !== '') {
        console.log("navLogo", navLogo);
        navLogo.classList.add('step-done');
        navBackground.classList.add('step-done');
      }
      if ( (res.coupon[0].background === '') && (res.coupon[0].text === '') && (res.coupon[0].prodId === '')) {
        navLogo.classList.add('step-done');
      }

      if (res.coupon[0].background !== '') {
        console.log("navBackground", navBackground);
        navBackground.classList.add('step-done');
      }
      if ( (res.coupon[0].background === '') && (res.coupon[0].logo !== '') ) {
        navBackground.classList.add('link-hover');
      }
      
      if (res.coupon[0].text !== '') {
        console.log("navText", navText);
        navText.classList.add('step-done');
      }

      //this don't
      if ( (res.coupon[0].text === '') && (res.coupon[0].background !== '') ) {
        navText.classList.add('step-done');
      }


      if (res.coupon[0].prodId !== '') {
        console.log("navProduct", navProduct);
        navProduct.classList.add('step-done');

        let navSummary = document.getElementById('nav-summary');
        navSummary.classList.add('step-done');
        console.log("navText.classList.contains('step-done'", navText.classList.contains('step-done'));
      }
      // if ( (res.coupon[0].prodId === '') && (res.coupon[0].text !== '') ) {
      //   navProduct.classList.add('link-hover');
      // }
    };

    GetCoupon(cb, info); //get data from db
  }, [props.currentStep]);

  //TODO fix or remove
  const clickStep = (evt) => {
    console.log("evt.target", evt.target.id);

    switch (props.currentStep) {
      case 'logo':

        break;
      case 'background':
      
        break;
      default:
        break;
    }
    
    if (props.initialContent !== '') {
      console.log("du kan gå till:", props.linkPath);
    } else {
      console.log("error, du måste fylla i något för att kunna gå till nästa steg");
    }
  };
  
  return (
    <header className=''>
        <div className='flex justify-between'>
          <Link to='/'>
            <h1 className='font-bold hover-text'>Adoveo</h1>
          </Link>
            <div className='btn btn-secondary'>LOGGA UT</div>
        </div>

          <div className='lg:flex justify-start mt-4'>
              <h2 className='lg:w-2/5'>Glasskupong mars 2022</h2>
              <nav className='justify-between items-center lg:w-3/5 flex flex-wrap bg-blue text-mint md:px-2 cursor-not-allowed'>
                {/* <ul > */}
                  <h3 id='nav-logo' className='nav-menu-item logo' onClick={clickStep}>Logga</h3>
                  <h3 id='nav-background' className='nav-menu-item' onClick={clickStep}>Bakgrund</h3>
                  <h3 id='nav-text' className='nav-menu-item' onClick={clickStep}>Din hälsning</h3>
                  <h3 id='nav-product' className='nav-menu-item' onClick={clickStep}>Välj produkt</h3>
                  <h3 id='nav-summary' className='nav-menu-item' onClick={clickStep}>Summering</h3>
                {/* </ul>   */}
              </nav>
          </div>

          {/* <div className='lg:flex justify-start mt-4'>
              <h2 className='lg:w-2/5'>Glasskupong mars 2022</h2>
              <nav className='justify-between items-center lg:w-3/5 flex flex-wrap bg-blue text-mint md:px-2'>
                  <Link to='/steg1'>
                    <h3 id='nav-logo' className='nav-menu-item'>Logga</h3>
                  </Link>
                  <Link to='/steg2'>
                    <h3 id='nav-background' 
                    className='nav-menu-item'>Bakgrund</h3>
                  </Link>
                  <Link to='/steg3'>
                    <h3 id='nav-text' className='nav-menu-item'>Din hälsning</h3>
                  </Link>
                  <Link to='/steg4'>
                    <h3 id='nav-product' className='nav-menu-item'>Välj produkt</h3>
                  </Link>
                  <Link to='/steg5'>
                    <h3 id='nav-summary' className='nav-menu-item'>Summering</h3>
                  </Link>
              </nav>
          </div> */}
        
    </header>
  )
};