import React, { useState, useEffect, useContext } from 'react';
import TinyEditor from './TinyEditor';
import { AccountContext } from '../App';
import UpdateCoupon from '../services/UpdateCoupon';

export default function StepLogo(props) {
  const [stepType, setStepType] = useState('logo');
  const [coupon, setCoupon] = useState({});

  useEffect( () => {
    setCoupon(props.coupon);
  }, [props.coupon]);

  //get couponId from Context
  const pickedCouponId = useContext(AccountContext).pickedCouponId;

  const updateCoupon = (newContent) => {

    let newCoupon = {
      'couponId': pickedCouponId,
      'couponLogo': newContent //from TinyEditor
    }; 

    UpdateCoupon(newCoupon); //update coupon in db

    //save new logo to state
    const couponCopy = {...coupon}; //copy state
    couponCopy.couponLogo = newCoupon.couponLogo; //add new logo 
    console.log("couponCopy uppdateras:", couponCopy);

    //TODO not working
    setCoupon(couponCopy); //update state with new logo
    
  };
  
  return (
    <AccountContext.Consumer>
      { account => 
        <div id='stepLogoWrapper' className='outline'>
          <h3>StepLogo: Woho, nu är du igång att skapa ditt digitala kupongerbjudande!</h3>
          <h4>1. Börja med att ladda upp din företagslogga.</h4>
          <TinyEditor stepType={stepType} updateCoupon={updateCoupon}/>
        </div>
      }
    </AccountContext.Consumer>
  )
};


  // couponId: 'couponId1',
  // heading: 'Varsågod, här får du en härlig energiboost!', 
  // bodyCopy: 'Det är vårkänslor i luften och det vill vi fira genom att bjuda dig på en glass!',
  // prodId: 'prodId1'

  // couponId: 'couponId2',
  // heading: 'Påskharen har varit framme...', 
  // bodyCopy: 'Hämta ditt smarriga påskägg!',
  // prodId: 'prodId2'
