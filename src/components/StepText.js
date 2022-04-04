import React, { useState, useEffect } from 'react';
import TinyEditor from './TinyEditor';

export default function StepText(props) {
  useEffect( () => {
    // props.setShowPreview(true);
    props.setCurrentStep('text');
    props.setLinkPath('/steg4'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setLinkPathBack('/steg2'); //linkPath for backBtn in Footer
    props.setToolBarOptions(`undo redo | fontsizeselect | fontselect | bold italic forecolor backcolor | alignleft aligncenter alignright | help`);
  });
  
  return (
    <div id='stepTextWrapper' className=''>
      <h4>3. Skriv en personlig hälsning.</h4>
      <p>Här väljer du också formateringen på rubrik och brödtext. </p>
      <TinyEditor 
        currentStep={props.currentStep}
        content={props.content}
        setContent={props.setContent}
        toolBarOptions={props.toolBarOptions}
        setToolBarOptions={props.setToolBarOptions}
        setIsNextBtnActive={props.setIsNextBtnActive}
      />
    </div>
  )
};

//TODO???TEST move TinyEditor to App.js?

//kom ihåg: TinyMCE 5.10.3 (kanske bättre med 6.0 men då fungerar inte alla false odyl i init)