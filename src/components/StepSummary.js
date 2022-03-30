import React, { useState, useEffect } from 'react';
// import TinyEditor from './TinyEditor';
import Footer from './Footer';

export default function StepSummary(props) {
  const [stepType, setStepType] = useState('summary');

  useEffect( () => {
    props.setShowPreview(true);
    props.setCurrentStep(stepType);
    //back to userPage start
    props.setLinkPath('/'); //send linkPath to Footer.js so nextBtn navigate to next step
  });
  
  return (
    <div id='stepSummaryWrapper' className='outline'>
    <h4>5. Såhär kommer ditt kupongerbjudande att se ut.</h4>
    <p>Mottagaren får ett SMS med en länk som går till kupongerbjudandet.</p>
    {/* <TinyEditor stepType={ stepType }/> */}
    <Footer 
      linkPath={props.linkPath} 
      setLinkPath={props.setLinkPath}
    /> 
  </div>
  )
};