import React, { useState } from 'react';
import TinyEditor from './TinyEditor';

export default function StepBackground() {
  const [stepType, setStepType] = useState('background');

  return (
    <div id='stepBackgroundWrapper' className='outline'>
      <h4>2. Välj vad du vill ha som bakgrundsbild. </h4>
      <p>Ladda upp en bild eller välj en färg.</p>
      <TinyEditor stepType={ stepType }/>
    </div>
  )
};