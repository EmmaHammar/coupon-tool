import React, { useState, useEffect } from 'react';
import TinyEditor from './TinyEditor';
import Footer from './Footer';

export default function StepText(props) {
  const [stepType, setStepType] = useState('text');

  useEffect( () => {
    props.setCurrentStep(stepType);
    props.setLinkPath('/steg4'); //send linkPath to Footer.js so nextBtn navigate to next step

  });
  
  return (
    <div id='stepTextWrapper' className='outline'>
      <h4>3. Skriv en personlig hälsning</h4>
      <p>Här skriver du rubrik och brödtext:</p>
      <TinyEditor stepType={ stepType }/>
      <Footer 
        linkPath={props.linkPath} 
        setLinkPath={props.setLinkPath}
      /> 
    </div>
  )
};