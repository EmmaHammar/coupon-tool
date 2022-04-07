import React, { useState, useEffect } from 'react';

export default function StepSummary(props) {

  useEffect( () => {
    props.setShowFooter(true);
    props.setShowPreview(true);
    props.setCurrentStep('summary');
    //back to userPage start
    props.setLinkPath('/'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setLinkPathBack('/steg4'); //linkPath for backBtn in Footer
  });
  
  return (
    <div id='stepSummaryWrapper' className='outline'>
    <h4>5. Såhär kommer ditt kupongerbjudande att se ut.</h4>
    <p>Mottagaren får ett SMS med en länk som går till kupongerbjudandet.</p>
  </div>
  )
};