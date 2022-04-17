import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Preview from './Preview';

export default function StepSummary(props) {

  const [showLoader, setShowLoader] = useState(true); 

  useEffect( () => {
    props.setShowFooter(true);
    // props.setShowPreview(true);
    props.setCurrentStep('summary');
    //back to userPage start
    props.setLinkPath('/'); //send linkPath to Footer.js so nextBtn navigate to next step
    props.setLinkPathBack('/steg4'); //linkPath for backBtn in Footer
    props.setIsNextBtnActive(true);

    document.getElementById('errorMsg').innerHTML = '';
  });

  useEffect( () => {
    setTimeout( () => {
      setShowLoader(false)
    }, 500);
  });
  
  return (
    <>
      <div id='stepSummaryWrapper' className=''>
        <h4>5. Såhär kommer ditt kupongerbjudande att se ut.</h4>
        <p>Mottagaren får ett SMS med en länk som går till kupongerbjudandet.</p>
      </div>
      <div id='mobileWrapper' className='outline rounded-3xl w-[300px] h-[534px] flex flex-col justify-between mt-3 border-separate'>
        {
          showLoader ? <Loader /> : <Preview />
        }
      </div>
    </>
  )
};