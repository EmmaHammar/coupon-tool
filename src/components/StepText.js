import React, { useState, useEffect } from 'react';
import TinyEditor from './TinyEditor';

export default function StepText(props) {
  const [stepType, setStepType] = useState('text');

  useEffect( () => {
    props.setCurrentStep(stepType);
  });
  
  return (
    <div id='stepTextWrapper' className='outline'>
      <h4>3. Skriv en personlig hälsning</h4>
      <p>Här skriver du rubrik och brödtext:</p>
      <TinyEditor stepType={ stepType }/>
    </div>
  )
};