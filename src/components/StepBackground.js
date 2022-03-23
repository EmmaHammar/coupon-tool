import React, { useState, useEffect } from 'react';
import TinyEditor from './TinyEditor';
import Footer from './Footer';

export default function StepBackground(props) {
  const [stepType, setStepType] = useState('background');

  useEffect( () => {
    props.setCurrentStep(stepType);
    props.setLinkPath('/steg3'); //send linkPath to Footer.js so nextBtn navigate to next step
  });

  return (
    <div id='stepBackgroundWrapper' className='outline'>
      <h4>2. Välj vad du vill ha som bakgrundsbild. </h4>
      <p>Ladda upp en bild eller välj en färg.</p>
      <TinyEditor 
        stepType={ stepType }
        content={props.content} 
        setContent={props.setContent}
      />
      <Footer linkPath={props.linkPath} setLinkPath={props.setLinkPath}/> 
    </div>
  )
};

//add activebtn?