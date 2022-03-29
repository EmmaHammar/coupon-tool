import React, { useState, useEffect } from 'react';
import TinyEditor from './TinyEditor';
import Footer from './Footer';

export default function StepText(props) {
  useEffect( () => {
    props.setCurrentStep('text');
    props.setLinkPath('/steg4'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setToolBarOptions(`undo redo | fontsizeselect | fontselect | bold italic forecolor backcolor | alignleft aligncenter alignright | help`);
  });
  
  return (
    <div id='stepTextWrapper' className='outline'>
      <h4>3. Skriv en personlig hälsning</h4>
      <p>Här skriver du rubrik och brödtext:</p>
      <TinyEditor 
        currentStep={props.currentStep}
        content={props.content}
        setContent={props.setContent}
        toolBarOptions={props.toolBarOptions}
        setToolBarOptions={props.setToolBarOptions}
        setIsNextBtnActive={props.setIsNextBtnActive}
      />
      <Footer 
        linkPath={props.linkPath} 
        isNextBtnActive={props.isNextBtnActive}
        setIsNextBtnActive={props.setIsNextBtnActive}
      /> 
    </div>
  )
};

//TODO???TEST move TinyEditor to App.js?