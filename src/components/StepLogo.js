import React, { useState, useEffect } from 'react';
import TinyEditor from './TinyEditor';
import { AccountContext } from '../App';
import Footer from './Footer';

export default function StepLogo(props) {
  const [stepType, setStepType] = useState('logo');

  useEffect( () => {
    props.setCurrentStep(stepType);
    props.setLinkPath('/steg2'); //send linkPath to Footer.js so nextBtn navigate to next step
  })

  return (
    <AccountContext.Consumer>
      { account => 
        <>
        <div id='stepLogoWrapper' className=''>
          <h3>StepLogo: Woho, nu är du igång att skapa ditt digitala kupongerbjudande!</h3>
          <h4>1. Börja med att ladda upp din företagslogga.</h4>
          <TinyEditor stepType={stepType} couponLogo={props.couponLogo} setCouponLogo={props.setCouponLogo}/>
        </div>
        <Footer linkPath={props.linkPath} setLinkPath={props.setLinkPath}/> 
        </>
      }
    </AccountContext.Consumer>
  )
};