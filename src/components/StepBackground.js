import React, { useState, useEffect } from 'react';
import TinyEditor from './TinyEditor';

export default function StepBackground(props) {
  const [stepType, setStepType] = useState('background');

  useEffect( () => {
    props.setCurrentStep(stepType);
  });

  return (
    <div id='stepBackgroundWrapper' className='outline'>
      <h4>2. Välj vad du vill ha som bakgrundsbild. </h4>
      <p>Ladda upp en bild eller välj en färg.</p>
      <TinyEditor stepType={ stepType }/>
    </div>
  )
};