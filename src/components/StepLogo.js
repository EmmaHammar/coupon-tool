import React, { useState, useEffect } from 'react';
import TinyEditor from './TinyEditor';
import { AccountContext } from '../App';
import Footer from './Footer';

export default function StepLogo(props) {

  useEffect( () => {
    props.setCurrentStep('logo');
    props.setLinkPath('/steg2'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setToolBarOptions(`undo redo | image | alignleft aligncenter alignright | help`);
  });

  return (
    <AccountContext.Consumer>
      { account => 
        <>
          <div id='stepLogoWrapper' className=''>
            <h3>StepLogo: Woho, nu är du igång att skapa ditt digitala kupongerbjudande!</h3>
            <h4>1. Börja med att ladda upp din företagslogga.</h4>
            <TinyEditor 
              currentStep={props.currentStep}
              content={props.content} 
              setContent={props.setContent}
              toolBarOptions={props.toolBarOptions}
              setToolBarOptions={props.setToolBarOptions}
            />
          </div>
          <Footer 
            linkPath={props.linkPath} 
          /> 
        </>
      }
    </AccountContext.Consumer>
  )
};

//TODO Remove AccountContext.Consumer?