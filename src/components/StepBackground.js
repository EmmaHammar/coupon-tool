import React, { useState, useEffect } from 'react';
import TinyEditor from './TinyEditor';
import Footer from './Footer';

export default function StepBackground(props) {
  useEffect( () => {
    props.setCurrentStep('background');
    props.setLinkPath('/steg3'); //send linkPath to Footer.js so nextBtn navigate to next step
  });

  return (
    <div id='stepBackgroundWrapper' className='outline'>
      <h4>2. Välj vad du vill ha som bakgrundsbild. </h4>
      <p>Ladda upp en bild eller välj en färg.</p>
      <TinyEditor 
        currentStep={props.currentStep}
        content={props.content} 
        setContent={props.setContent}
      />
      <Footer linkPath={props.linkPath} /> 
    </div>
  )
};

//add activebtn?