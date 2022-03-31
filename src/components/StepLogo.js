import React, { useState, useEffect } from 'react';
// import Loader from './Loader';
import TinyEditor from './TinyEditor';
// import { AccountContext } from '../App';

export default function StepLogo(props) {
  // const [isNextBtnActive, setIsNextBtnActive] = useState(false);

  useEffect( () => {
    props.setShowPreview(true);
    props.setCurrentStep('logo');
    props.setLinkPath('/steg2'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setToolBarOptions(`undo redo | image | alignleft aligncenter alignright | help`);
  });

  return (
    // <AccountContext.Consumer>
    //   { account => 
        <>
          <div id='stepLogoWrapper' className=''>
            {/* <h3>StepLogo: Woho, nu är du igång att skapa ditt digitala kupongerbjudande!</h3> */}
            <h4>1. Börja med att ladda upp din företagslogga.</h4>
            <p>Välj bland dina filer samt justera storleken.</p>
              <TinyEditor 
                currentStep={props.currentStep}
                content={props.content} 
                setContent={props.setContent}
                toolBarOptions={props.toolBarOptions}
                setToolBarOptions={props.setToolBarOptions}
                setIsNextBtnActive={props.setIsNextBtnActive}
              />
          </div>
        </>
      // }
    // </AccountContext.Consumer>
  )
};

//TODO Remove AccountContext.Consumer?