import React, { useEffect } from 'react';
// import { SaveContext } from '../App';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  let nextBtnText;
  if (props.currentStep === 'summary') {
    nextBtnText = 'SLUTFÖR';
  } else {
    nextBtnText = 'GÅ VIDARE';
  };

  //TO DO reach a tag in button element and on a element: set tabindex=-1 -> remove tab focus possibility
  // let a = document.getElementsByTagName('a');
  // console.log('a', a);
  
  return (
    // <SaveContext.Consumer>
      // { saveClick => 
        <footer id='navFooter' className='outline h-16 md:h-20 bg-blue fixed bottom-0 inset-x-0 px-10 flex justify-between items-center'>
          {/* <div className=''> */}

          
            <button id='backBtn' className='btn btn-primary-reverse' onClick={props.saveClick}>
              <Link to={props.linkPathBack}>
                TILLBAKA
              </Link>
            </button>
          
          {/* <Link to={props.linkPathBack}>
            <button id='backBtn' className='btn btn-primary-reverse' onClick={props.saveClick}>TILLBAKA</button>
          </Link> */}
            {
            props.isNextBtnActive ? 
              <Link to={props.linkPath}> 
              <button id='nextBtn' className='btn btn-primary' onClick={props.saveClick}>{nextBtnText}</button>
              </Link>
            : <button id='nextBtn' className='btn btn-primary-inactive' onClick={props.saveClick}>{nextBtnText}</button>
            }
        </footer>
      // }
    // </SaveContext.Consumer>   
  )
};