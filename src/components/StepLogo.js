import React, { useState, useEffect, useContext } from 'react';
import TinyEditor from './TinyEditor';
import { AccountContext } from '../App';


export default function StepLogo() {
  const [stepType, setStepType] = useState('logo');

  //get couponId from Context
  const pickedCouponId = useContext(AccountContext).pickedCouponId;

  useEffect( () => {
    fetch('http://localHost:3001/coupons')
    .then(response => response.json())
    .then(data => {
      console.log("updateCoupon response:", data);
    })

        
  
  });

  const updateCoupon = (msg) => {
    //get what to update from TinyEditor
    console.log("i StepLogo:", msg);

    console.log("pickedCouponId from context:", pickedCouponId);

    

    //send to db, fetch

    //get response
    //save to state



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
