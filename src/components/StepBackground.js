import React, { useState, useEffect } from 'react';
import TinyEditor from './TinyEditor';

export default function StepBackground(props) {
  useEffect( () => {
    props.setCurrentStep('background');
    props.setLinkPath('/steg3'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setToolBarOptions(`undo redo | image | help`);
  });

  return (
    <div id='stepBackgroundWrapper' className='outline'>
      <h4>2. Välj vad du vill ha som bakgrundsbild. </h4>
      <p>Ladda upp en bakgrundsbild.</p>
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