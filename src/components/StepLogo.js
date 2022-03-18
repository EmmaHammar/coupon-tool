import React, { useState } from 'react';
import TinyEditor from './TinyEditor';

export default function StepLogo() {
  const [stepType, setStepType] = useState('logo');

  return (
    <div id='stepLogoWrapper' className='outline'>
      <h3>StepLogo: Woho, nu är du igång att skapa ditt digitala kupongerbjudande!</h3>
      <h4>1. Börja med att ladda upp din företagslogga.</h4>
      <TinyEditor stepType={ stepType }/>
    </div>
  )
};