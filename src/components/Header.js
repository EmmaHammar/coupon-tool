import { navigate } from '@storybook/addon-links';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AccountContext } from '../App';
import GetCoupon from '../services/GetCoupon';
import { useNavigate } from 'react-router-dom';



export default function Header(props) {
  const navigate = useNavigate(); 
  const account = useContext(AccountContext);
  const [showCouponHeader, setShowCouponHeader] = useState(false);

  //TODO not finished
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

    //add clickable style to step if it has data or if prevStep has data
    const cb = (res) => {
      console.log("fetch i Header.js:", res.coupon[0]);
      if (res.coupon[0].logo !== '') {
        navLogo.classList.add('clickable-step');
        navBackground.classList.add('clickable-step');
      }
      if (res.coupon[0].background !== '') {
        navText.classList.add('clickable-step');
      }
      if (res.coupon[0].text !== '') {
        navProduct.classList.add('clickable-step');
      }
      if (res.coupon[0].prodId !== '') {
        navSummary.classList.add('clickable-step');
      }
    };

    GetCoupon(cb, info); //get data from db
  }, [props.currentStep]); //TODO seems that GetCoupon() is executed twice (=2 fetches), why? fix!
// }, []); //only 1 time, not working when click menu item in stepper



  // add link if menu item is clickable
  const clickStep = (evt) => {
    if (document.getElementById(evt.target.id).classList.contains('clickable-step')) {
      switch (evt.target.id ) {
        case 'nav-logo':
          navigate('/steg1');
          break;
        case 'nav-background':
          navigate('/steg2');
          break;
        case 'nav-text':
          navigate('/steg3');
          break;
        case 'nav-product':
          navigate('/steg4');
          break;
        case 'nav-summary':
          navigate('/steg5');
          break;
        default:
          break;
      };
    };
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
              <nav className='justify-between items-center lg:w-3/5 flex flex-wrap bg-blue text-mint md:px-2'>
                {/* <ul > */}
                  <h3 id='nav-logo' className='nav-menu-item logo' onClick={clickStep}>Logga</h3>
                  <h3 id='nav-background' className='nav-menu-item' onClick={clickStep}>Bakgrund</h3>
                  <h3 id='nav-text' className='nav-menu-item' onClick={clickStep}>Din hälsning</h3>
                  <h3 id='nav-product' className='nav-menu-item' onClick={clickStep}>Välj produkt</h3>
                  <h3 id='nav-summary' className='nav-menu-item' onClick={clickStep}>Summering</h3>
                {/* </ul>   */}
              </nav>
          </div>        
    </header>
  )
};

//TODO fix error:
// react_devtools_backend.js:3973 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
//     at TinyEditor (http://localhost:3000/%E2%80%9D./%E2%80%9D/static/js/bundle.js:2193:66)
//     at div
//     at StepText (http://localhost:3000/%E2%80%9D./%E2%80%9D/static/js/bundle.js:2052:68)