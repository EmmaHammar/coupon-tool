import React, { useState } from 'react';
import TinyEditor from './TinyEditor';

export default function StepText() {
  const [stepType, setStepType] = useState('text');

  return (
    <div id='stepTextWrapper' className='outline'>
      <h4>3. Skriv en personlig hälsning</h4>
      <p>Här skriver du rubrik och brödtext:</p>
      <TinyEditor stepType={ stepType }/>
    </div>
  )
};