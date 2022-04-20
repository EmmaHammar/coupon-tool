import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  let nextBtnText;
  if (props.currentStep === 'summary') {
    nextBtnText = 'SLUTFÖR';
  } else {
    nextBtnText = 'GÅ VIDARE';
  };
  
  return (
    <footer id='navFooter' className='outline h-16 md:h-20 bg-blue fixed bottom-0 inset-x-0 px-10 flex justify-between items-center'>
      <Link to={props.linkPathBack} tabIndex='-1'>
        <button id='backBtn' className='btn btn-primary-reverse' tabIndex='0' onClick={props.saveClick}>TILLBAKA</button>
      </Link>
      {
        props.isNextBtnActive ? 
          <Link to={props.linkPathNext} tabIndex='-1'> 
            <button id='nextBtn' className='btn btn-primary' onClick={props.saveClick}>{nextBtnText}</button>
          </Link>
      : 
        <button id='nextBtn' className='btn btn-primary-inactive' onClick={props.saveClick}>{nextBtnText}</button>
      }
    </footer>
  )
};