import React, { useState, useEffect } from 'react';
import TinyEditor from './TinyEditor';

export default function StepBackground(props) {
  // const [bgColor, setBgColor] = useState('');

  useEffect( () => {
    // props.setShowPreview(true);
    props.setCurrentStep('background');
    props.setLinkPath('/steg3'); //send linkPath to Footer.js so nextBtn navigate to next step

    // props.setToolBarOptions(`undo redo`); //TODO remove later

    if (props.content === '') {
      props.setIsNextBtnActive(false);
    } else {
      props.setIsNextBtnActive(true);
    };
 
  });

  const inputChange = (evt) => {
    // console.log("evt.target", evt.target.value);
    props.setContent(evt.target.value);

    //TODO onClick -> save to db (fix so remove TinyEditor)
  };

  return (
    <div id='stepBackgroundWrapper' className=''>
      <h4>2. Välj bakgrundsfärg. </h4>
      <p>Ange färgen i hex, ex: #00FFFF</p>

      {/* <p>Ladda upp en bakgrundsbild.</p> */}
      {/* <label for='bgColor'>Bakgrundsfärg</label> */}
      <input className='btn' type='text' id='bgColor' name='bgColor' onChange={inputChange}></input>
      {/* <TinyEditor 
        currentStep={props.currentStep}
        content={props.content} 
        setContent={props.setContent}
        toolBarOptions={props.toolBarOptions}
        setToolBarOptions={props.setToolBarOptions}
        setIsNextBtnActive={props.setIsNextBtnActive}
      /> */}
    </div>
  )
};