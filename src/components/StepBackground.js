import React, { useState, useEffect } from 'react';
import TinyEditor from './TinyEditor';

export default function StepBackground(props) {
  useEffect( () => {
    // props.setShowPreview(true);
    props.setCurrentStep('background');
    props.setLinkPath('/steg3'); //send linkPath to Footer.js so nextBtn navigate to next step
    // props.setToolBarOptions(`undo redo | image | help`);
    props.setToolBarOptions(`undo redo`);
    // props.setToolBarOptions(`undo redo | backcolor`);
  });

  return (
    <div id='stepBackgroundWrapper' className=''>
      <h4>2. Välj bakgrundsfärg. </h4>
      <p>Ange färgen i hex, ex: #00FFFF</p>

      {/* <p>Ladda upp en bakgrundsbild.</p> */}
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